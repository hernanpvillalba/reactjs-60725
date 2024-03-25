import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ title, price, pictureURL, id }) => {
  return (
    <Card
      direction={{ base: "row", sm: "column" }}
      overflow="hidden"
      variant="outline"
      margin="10px"
      align="center"
    >
      <CardBody>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={pictureURL}
          alt={title}
          borderRadius="lg"
          boxSize="100%"
          h="200px"
        />
        <Stack>
          <Heading align="center" color="green " size="md">
            {title}
          </Heading>
          <Text align="center" variant="solid" colorScheme="green" py="4">
            Precio: ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="green">
          <Link to={`/producto/${id}`}>Ver Detalle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
