import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
    repetirEmail: "",
  });

  const [emailMatch, setEmailMatch] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [validName, setValidName] = useState(true);

  const { cart, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate;

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const validarEmail = () => {
    if (user.email === user.repetirEmail) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  };

  const validarTelefono = () => {
    if (user.telefono.length === 10) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };

  const validarNombre = () => {
    if (user.nombre.length >= 3) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const getOrder = async () => {
    validarEmail();
    validarTelefono();
    validarNombre();

    if ((emailMatch, validPhone)) {
      const ordersCollection = collection(db, "orders");
      try {
        for (const item of cart) {
          const productRef = doc(db, "productos", item.id);
          const product = await getDoc(productRef);

          const stockActual = product.data().stock;

          if (stockActual >= item.quantity) {
            await updateDoc(productRef, {
              stock: stockActual - item.quantity,
            });
          } else {
            console.log(`no hay suficiente stock de ${item.nombre}`);
          }
        }
        const order = {
          buyer: user,
          items: cart,
          total: getTotal(),
        };

        const orderRef = await addDoc(ordersCollection, order);
        const orderID = orderRef.id;

        Swal.fire({
          title: `Muchas gracias por tu compra, tu numero de Orden es ${orderID}`,
        }).then(() => {
          clearCart();
          navigate("/");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box>
      <form action="">
        <Input
          type="text"
          onChange={updateUser}
          name="nombre"
          placeholder="Nombre"
        />
        <Input
          type="number"
          onChange={updateUser}
          name="telefono"
          placeholder="Telefono"
        />
        <Input
          type="email"
          onChange={updateUser}
          name="email"
          placeholder="Email"
        />
        <Input
          onChange={updateUser}
          name="repetirEmail"
          placeholder="Repetir Email"
        />
        {!emailMatch && <Text color={"red.500"}>El Email no coincide </Text>}
        {!validPhone && (
          <Text color={"red.500"}>
            Por favor, introduce un número de teléfono válido de 10 dígitos.
          </Text>
        )}
        {!validName && (
          <Text color={"red.500"}>
            Por favor, introduce un nombre válido (solo letras y al menos 3
            caracteres).
          </Text>
        )}
        <Button onClick={getOrder}>Comprar</Button>
      </form>
    </Box>
  );
};

export default Checkout;
