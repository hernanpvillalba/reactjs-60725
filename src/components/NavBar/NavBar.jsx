import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box className="navbar">
      <Heading className="logo">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/hernanpvillalba/reactjs-60725/main/imagenes/logo.png"
            alt="logo"
          />
        </Link>
      </Heading>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/categorias/dulces">Dulces</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/tortas">Tortas</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/eventos">Eventos</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/antojos">Antojos</Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <CartWidget />
    </Box>
  );
};

export default NavBar;
