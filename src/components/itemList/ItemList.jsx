import React from "react";
import Item from "../item/Item";
import { Box, SimpleGrid } from "@chakra-ui/react";

const ItemList = ({ data }) => {
  return (
    <SimpleGrid
      spacing={4}
      templateRows="repeat(auto-fill, minmax(200px, 3fr))"
    >
      <Box display="flex">
        {data.map((el) => (
          <div key={el.id}>
            <Item {...el} />
          </div>
        ))}
      </Box>
    </SimpleGrid>
  );
};

export default ItemList;
