import React from 'react'
import Item from '../item/Item'
import { Box, Flex } from '@chakra-ui/react';


const ItemList = ({ data }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      {data.map((el) => (
        <div key={el.id}>
          <Item {...el} />
        </div>
      ))}
    </Box>
  );
};

export default ItemList