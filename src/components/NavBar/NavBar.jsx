import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'

  import { ChevronDownIcon } from '@chakra-ui/icons'
  import './NavBar.css'


const NavBar = () => {
  return (
    <div className='navbar'>

        <img src="../imagenes/logo.png" alt="logo" />

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Productos
            </MenuButton>
            <MenuList>
                <MenuItem>Desayunos</MenuItem>
                <MenuItem>Tortas</MenuItem>
                <MenuItem>Eventos</MenuItem>
                <MenuItem>Antojos</MenuItem>
                <MenuItem>Postres</MenuItem>
            </MenuList>
        </Menu>

        <CartWidget />

    </div>
  )
}

export default NavBar