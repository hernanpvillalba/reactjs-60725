import React, { useContext } from 'react'
import { BsCartFill } from "react-icons/bs";
import './CartWidget.css'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext'
import { Box } from '@chakra-ui/react';


const CartWidget = () => {

  const {getQuantity} = useContext(CartContext)


  return (
    <Box className="carrito">
      <Link to='/cart'>
      <BsCartFill /> <span>{getQuantity()}</span>
      </Link>
    </Box>
  );
};

export default CartWidget;