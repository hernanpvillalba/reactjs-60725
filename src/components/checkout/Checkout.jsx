import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Button, Input, Text } from "@chakra-ui/react";
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

  const getOrder = async () => {
    validarEmail();

    if (emailMatch) {
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
    <div>
      <form action="">
        <Input onChange={updateUser} name="nombre" placeholder="Nombre" />
        <Input onChange={updateUser} name="telefono" placeholder="Telefono" />
        <Input onChange={updateUser} name="email" placeholder="Email" />
        <Input
          onChange={updateUser}
          name="repetirEmail"
          placeholder="Repetir Email"
        />
        {!emailMatch && <Text color={"red.500"}>El Email no coincide </Text>}
        <Button onClick={getOrder}>Comprar</Button>
      </form>
    </div>
  );
};

export default Checkout;
