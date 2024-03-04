import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Box, Button, Heading } from '@chakra-ui/react'
import './ItemCount.css'

 const ItemCount = ({inventario, initialValue, onAdd}) => {
  const {count, incrementarCantidad, reducirCantidad} = useCounter (initialValue, inventario)

    return (
    <Box className='itemCount' mb={2}>
        <Button colorScheme='blue' onClick={reducirCantidad}>-</Button>
        <Heading>{count}</Heading>
        <Button colorScheme='blue' onClick={incrementarCantidad}>+</Button>
        <Button colorScheme='blue' onClick={() => onAdd(count)}>Agregar al Carrito</Button>
    </Box>
  )
}

export default ItemCount