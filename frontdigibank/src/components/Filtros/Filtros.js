import React, { useState } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Button } from '@material-ui/core'

const Filtros = ({ tProd, seg, tBien, setTprod, setSeg, setTbien, showFilterModal }) => {
    const [isAut, setIsAut]=useState(false)
    const finFilter = () => {
        showFilterModal()
    }

    const clearFilter = () => {
        setTprod('')
        setTbien('')
        setSeg('')
        showFilterModal()
    }
    return (
        <div className='modal'>

            <FormControl>
                <FormLabel id="filterTipoProducto">Tipo de producto</FormLabel>
                <RadioGroup
                    aria-labelledby="filterTipoProducto"
                    name="row-radio-buttons-group"
                    value={tProd}
                    onChange={(e) => { setTprod(e.target.value); if(e.target.value!=="Préstamo Automotor"){setIsAut(true); setTbien('')}else{setIsAut(false)} }}
                >
                    <FormControlLabel value="Préstamo Hipotecario" control={<Radio />} label="Préstamo Hipotecario" />
                    <FormControlLabel value="Préstamo Automotor" control={<Radio />} label="Préstamo Automotor" />
                    <FormControlLabel value="Caja de Ahorro" control={<Radio />} label="Caja de Ahorro" />
                    <FormControlLabel value="Cuenta Corriente" control={<Radio />} label="Cuenta Corriente" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="filterSegmento">Segmento</FormLabel>
                <RadioGroup
                
                    aria-labelledby="filterSegmento"
                    name="row-radio-buttons-group2"
                    value={seg}
                    onChange={(e) => { setSeg(e.target.value) }}
                >
                    <FormControlLabel value="Jóvenes" control={<Radio />} label="Jóvenes" />
                    <FormControlLabel value="Standard" control={<Radio />} label="Standard" />
                    <FormControlLabel value="Premium" control={<Radio />} label="Premium" />
                </RadioGroup>
            </FormControl>
            <FormControl disabled={isAut}>
                <FormLabel id="filterSegmento">Segmento</FormLabel>
                <RadioGroup
                    aria-labelledby="filterSegmento"
                    name="row-radio-buttons-group2"
                    value={tBien}
                    onChange={(e) => { setTbien(e.target.value) }}
                >
                    <FormControlLabel value="Auto" control={<Radio />} label="Auto" />
                    <FormControlLabel value="Camioneta" control={<Radio />} label="Camioneta" />
                </RadioGroup>
            </FormControl>
            <div align='right'>
                <Button color='primary' onClick={() => finFilter()}>Filtrar</Button>
                <Button color='secondary' onClick={() => clearFilter()}>Restaurar</Button>
            </div>
        </div>

    )
}

export default Filtros