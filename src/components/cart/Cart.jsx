import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const {
    cart,
    getTotal,
    removeItem,
    clearCart,
    decrementarCantidad,
    incrementarCantidad,
  } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nombre del Producto</Th>
              <Th>Precio</Th>
              <Th>Cantidad</Th>
              <Th></Th>
              <Th>Subtotal</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((prod) => (
              <Tr key={prod.id}>
                <Td>{prod.title}</Td>
                <Td>{prod.price}</Td>
                <Td>{prod.quantity}</Td>
                <Td>
                  {
                    <>
                      <Button
                        colorScheme="green"
                        margin="5px"
                        onClick={() => decrementarCantidad(prod.id)}
                      >
                        -
                      </Button>
                      <Button
                        colorScheme="green"
                        margin="5px"
                        onClick={() => incrementarCantidad(prod.id)}
                      >
                        +
                      </Button>
                    </>
                  }
                </Td>
                <Td>${prod.price * prod.quantity}</Td>
                <Td>
                  <Button onClick={(e) => removeItem(prod.id)}>
                    <FaTrash />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot display='flex' justifyContent='center'>
            <Tr>
              <Th>
                <Button colorScheme="red" onClick={() => clearCart()}>
                  {" "}
                  Vaciar Carrito{" "}
                </Button>
              </Th>
              <Th fontSize='1.5rem' >Total: ${getTotal()}</Th>
              <Th>
                <Button colorScheme="blue">
                  <Link to={"/checkout"}>Checkout</Link>{" "}
                </Button>{" "}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
  } else {
    return (
      <Box align="center">
        <Heading textAlign="center" margin="30px">
          No Hay Productos
        </Heading>
        <Button margin="100px" variant="solid" colorScheme="green">
          <Link to="/"> Ver Productos </Link>
        </Button>
      </Box>
    );
  }
};

export default Cart;
