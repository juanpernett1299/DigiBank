import React from 'react'
import {TableCell, TableRow } from '@material-ui/core'
import {Edit} from '@material-ui/icons'
import './Productos.css'

const Productos = ({ data, setModalState, setIdProd}) => {

    const setID=(id)=>{
        setModalState();
        setIdProd(id);
    }

    const display = data && data.map((item, index) => {
            if (item.cuentas_vista.length === 0) {
                const {idProducto, nombreProd, clase, tipoProd, prestamos, prod_seg } = item;
                const valorprestamo = prestamos.map(detalle => detalle.valor_prestamo);
                const cuotas = prestamos.map(detalle => detalle.cantidad_cuotas)
                return (
                    <TableRow key={index}>
                        <TableCell className='body-cell'>{nombreProd}</TableCell>
                        <TableCell className='body-cell'>{clase}</TableCell>
                        <TableCell className='body-cell'>{tipoProd}</TableCell>
                        <TableCell className='body-cell'>{prod_seg.map(itSeg => itSeg.tipo_segmento.nombreSeg)}</TableCell>
                        <TableCell className='body-cell'>$</TableCell>
                        <TableCell className='body-cell'>{valorprestamo * cuotas}</TableCell>
                        <TableCell className='body-cell'>{prestamos.map(detalle => detalle.tipo_bien)}</TableCell>
                        <TableCell className='body-cell'>{prestamos.map(detalle => detalle.valor_prestamo)}</TableCell>
                        <TableCell className='body-cell'>{prestamos.map(detalle => detalle.cantidad_cuotas)}</TableCell>
                        <TableCell className='body-cell'>No aplica</TableCell>
                        <TableCell className='body-cell'><Edit onClick={()=> setID(idProducto)}/></TableCell>
                    </TableRow>)
            } else {
                const { idProducto, nombreProd, clase, tipoProd, cuentas_vista, prod_seg } = item
                return (
                    <TableRow key={index}>
                        <TableCell className='body-cell'>{nombreProd}</TableCell>
                        <TableCell className='body-cell'>{clase}</TableCell>
                        <TableCell className='body-cell'>{tipoProd}</TableCell>
                        <TableCell className='body-cell'>{prod_seg.map(itSeg => itSeg.tipo_segmento.nombreSeg)}</TableCell>
                        <TableCell className='body-cell'>{cuentas_vista.map(cuenta => cuenta.moneda)}</TableCell>
                        <TableCell className='body-cell'>{cuentas_vista.map(cuenta => cuenta.monto_max)}</TableCell>
                        <TableCell className='body-cell'>No aplica</TableCell>
                        <TableCell className='body-cell'>No aplica</TableCell>
                        <TableCell className='body-cell'>No aplica</TableCell>
                        <TableCell className='body-cell'>{cuentas_vista.map(cuenta => {
                            const { sobregiro } = cuenta;
                            switch (sobregiro) {
                                case true:
                                    return "Permitido";
                                case false:
                                    return "No Permitido";
                                case null:
                                    return "No aplica";
                                default:
                                    return ""
                            }
                        })}</TableCell>
                        <TableCell className='body-cell'><Edit onClick={()=> setID(idProducto)}/></TableCell>
                    </TableRow>
                )
            }
        })
        return display
}

export default Productos