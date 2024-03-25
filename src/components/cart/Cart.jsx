import { Button, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'


const Cart = () => {

    const {cart, getTotal, removeItem, clearCart } = useContext(CartContext)

    if(cart.length > 0 ) {

  return (
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Nombre del Producto</Th>
        <Th>Precio</Th>
        <Th>Cantidad</Th>
        <Th>Subtotal</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        cart.map((prod) => (
            <Tr key={prod.id}>
                <Td>{prod.title}</Td>
                <Td>{prod.price}</Td>
                <Td>{prod.quantity}</Td>
                <Td>${prod.price * prod.quantity}</Td>
                <Td><Button onClick={(e) => removeItem (prod.id)}>Eliminar</Button></Td>
            </Tr>  
        ))
      }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th><Button onClick={() => clearCart () }> Vaciar Carrito </Button></Th>
        <Th>Total: ${getTotal()}</Th>
        <Th><Heading><Link to={'/checkout'} >Checkout</Link> </Heading> </Th>
        
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}else{
    return(
        <>
        <Heading>Todavia no agregaste ningun producto</Heading>
        <Link to = "/"> Ver Productos </Link>
        </>
    )
}
    
}

export default Cart

