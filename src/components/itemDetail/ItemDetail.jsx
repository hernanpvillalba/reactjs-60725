import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ title, description, stock, pictureURL, id, price }) => {
  const [quantity, setQuantity] = useState();
  const { addItem, setStock } = useContext(CartContext);
  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    const item = {
      id,
      title,
      price,
    };
    setStock(stock);
    addItem(item, cantidad);
    console.log(`Agregaste ${cantidad} productos`);
  };

  return (
    <Box>
      <Card align="center">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={pictureURL}
          alt={title}
          padding="10px"
          borderRadius="lg"
          boxSize="100%"
          h="200px"
        />
        <CardHeader>
          <Heading size="lg" color="green">
            {" "}
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text size="md">{description}</Text>
        </CardBody>
        <CardFooter className="cardFooterContainer">
          {quantity > 0 ? (
            <Button colorScheme="green">
              {" "}
              <Link to="/cart">Ir al Carrito</Link>{" "}
            </Button>
          ) : (
            <ItemCount inventario={stock} initialValue={1} onAdd={onAdd} />
          )}
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ItemDetail;
