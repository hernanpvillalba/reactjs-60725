import React, { useState } from 'react'

const useCounter = (initialValue, inventario) => {
  const [count, setCount] = useState(initialValue);

  const incrementarCantidad = () => {
    count < inventario && setCount(count + 1);
  };

  const reducirCantidad = () => {
    count > initialValue && setCount(count - 1);
  };
  return {
    count,
    incrementarCantidad,
    reducirCantidad,
  };
};

  export default useCounter