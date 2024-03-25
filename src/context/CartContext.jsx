import React, { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [stock, setStock] = useState();

  const addItem = (productToAdd, quantity) => {
    const newItem = {
      ...productToAdd,
      quantity,
    };
    if (isInCart(newItem.id)) {
      const updatedCart = cart.map((el) => {
        if (el.id === newItem.id) {
          return { ...el, quantity: el.quantity + newItem.quantity };
        }
        return el;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const isInCart = (id) => {
    return cart.some((el) => el.id === id);
  };

  const getTotal = () => {
    return cart.reduce(
      (actual, item) => actual + item.price * item.quantity,
      0
    );
  };

  const getQuantity = () => {
    return cart.reduce((actual, item) => actual + item.quantity, 0);
  };

  const removeItem = (id) => {
    const deleteItem = cart.filter((el) => el.id !== id);
    return setCart([...deleteItem]);
  };

  const clearCart = () => {
    return setCart([]);
  };

  const decrementarCantidad = (id) => {
    const updatedCart = cart.map((el) => {
      if (el.id === id) {
        const NewQuantity = Math.max(el.quantity - 1, 1);
        return { ...el, quantity: NewQuantity };
      }
      return el;
    });
    setCart(updatedCart);
  };

  const incrementarCantidad = (id) => {
    const updatedCart = cart.map((el) => {
      if (el.id === id) {
        const NewQuantity = Math.min(el.quantity + 1, stock);
        return { ...el, quantity: NewQuantity };
      }
      return el;
    });
    setCart(updatedCart);
  };

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        addItem,
        getTotal,
        getQuantity,
        removeItem,
        clearCart,
        decrementarCantidad,
        incrementarCantidad,
        setStock,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
