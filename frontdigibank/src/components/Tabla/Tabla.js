import React from 'react'
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core'
import Productos from './Productos/Productos';
import './Tabla.css'
const Tabla = ({ data, setModalState, setIdProd }) => {
  return (
    <TableContainer className='table'>
      <Table>
        <TableHead className='table-head'>
          <TableRow>
            <TableCell className='head-cell'>Producto</TableCell>
            <TableCell className='head-cell'>Clase</TableCell>
            <TableCell className='head-cell'>Tipo</TableCell>
            <TableCell className='head-cell'>Segmento</TableCell>
            <TableCell className='head-cell'>Moneda</TableCell>
            <TableCell className='head-cell'>Monto Máximo</TableCell>
            <TableCell className='head-cell'>Tipo de bien</TableCell>
            <TableCell className='head-cell'>Valor del préstamo</TableCell>
            <TableCell className='head-cell'>Cuotas</TableCell>
            <TableCell className='head-cell'>Sobregiro</TableCell>
            <TableCell className='head-cell'>Edición</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Productos data={data} setModalState={setModalState} setIdProd={setIdProd} />
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tabla