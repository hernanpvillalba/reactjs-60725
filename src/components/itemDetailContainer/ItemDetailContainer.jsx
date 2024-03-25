import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByID } from '../../data/asyncMock'
import ItemDetail from '../itemDetail/ItemDetail';
import { Box, Spinner } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productID } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const queryRef = doc (db, 'productos', productID)

      const response = await getDoc (queryRef)

      const newProduct = {
        id: response.id,
        ...response.data()
      }
      setProduct(newProduct)
      setLoading(false)
    }
    getProduct()
  }, []);

  return (
    <Box>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="rgb(139, 198, 139)"
          size="xl"
        />
      ) : (
        <ItemDetail {...product} />
      )}
    </Box>
  );
};

export default ItemDetailContainer