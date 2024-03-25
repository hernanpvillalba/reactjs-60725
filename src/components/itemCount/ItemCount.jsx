import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Box, Button, Heading } from '@chakra-ui/react'
import './ItemCount.css'

 const ItemCount = ({ inventario, initialValue, onAdd }) => {
   const { count, incrementarCantidad, reducirCantidad } = useCounter(
     initialValue,
     inventario
   );

   return (
     <Box className="itemCount" mb={2}>
       <Button colorScheme="green" onClick={reducirCantidad}>
         -
       </Button>
       <Heading>{count}</Heading>
       <Button colorScheme="green" onClick={incrementarCantidad}>
         +
       </Button>
       <Button colorScheme="green" onClick={() => onAdd(count)}>
         Agregar al Carrito
       </Button>
     </Box>
   );
 };

export default ItemCount