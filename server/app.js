const cors = require('cors')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
const app = express();

app.use(express.json())
app.use(cors())


//Obtener todos los productos
app.get('/productos', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let {
        tprod = undefined,
        seg = undefined,
        tBien = undefined
    } = req.query

    if (tprod === '') { tprod = undefined }
    if (seg === '') { seg = undefined }
    if (tBien === '') { tBien = undefined }

    let productos
    if (tBien===undefined){
        productos = await prisma.productos.findMany({
            where: {
                tipoProd: tprod
                , prod_seg: {
                    some: {
                        tipo_segmento: {
                            nombreSeg: seg
                        }
                    }
                }
            },
            select: {
                idProducto: true,
                nombreProd: true,
                clase: true,
                tipoProd: true,
                prestamos: {
                    select: {
                        valor_prestamo: true,
                        cantidad_cuotas: true,
                        tipo_bien: true
                    }
                },
                cuentas_vista: {
                    select: {
                        moneda: true,
                        monto_max: true,
                        sobregiro: true
                    }
                },
                prod_seg: {
                    select: {
                        tipo_segmento: true
                    }
                }
            }
        }
        )
    }else{
        productos = await prisma.productos.findMany({
            where: {
                tipoProd: tprod
                , prod_seg: {
                    some: {
                        tipo_segmento: {
                            nombreSeg: seg
                        }
                    }
                },prestamos: {
                    some: {
                        tipo_bien: {
                            equals:tBien
                        }
                    }
                }
            },
            select: {
                idProducto: true,
                nombreProd: true,
                clase: true,
                tipoProd: true,
                prestamos: {
                    select: {
                        valor_prestamo: true,
                        cantidad_cuotas: true,
                        tipo_bien: true
                    }
                },
                cuentas_vista: {
                    select: {
                        moneda: true,
                        monto_max: true,
                        sobregiro: true
                    }
                },
                prod_seg: {
                    select: {
                        tipo_segmento: true
                    }
                }
            }
        }
        )
    }
    
    res.send(productos)
})

//Modificar el nombre de un producto
app.put('/productos/:id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { id } = req.params
    const { nombreProd } = req.body
    const producto = await prisma.productos.update({
        where: { idProducto: Number(id) },
        data: { nombreProd }
    })
    res.json(producto)
})


app.listen(3002, () =>
    console.log("Server ready at http://localhost:3002")
);