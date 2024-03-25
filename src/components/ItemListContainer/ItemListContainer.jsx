import { Box, Center, Heading, Spinner } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'  
import ItemList from '../itemList/ItemList'
import { Await, useParams } from 'react-router-dom'
import  CartContext  from '../../context/CartContext'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryID } = useParams();

  useEffect(() => {
    setLoading(true);
    const getProducts = async() => {
      const queryRef = !categoryID ?
      collection (db, 'productos') :
      query (collection(db, 'productos'), where('categoria', '==', categoryID))
      const response = await getDocs (queryRef)
      console.log(response)
      const products = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id
        }
        return newProduct
      })
      setProducts(products)
      setLoading(false)
    }
    getProducts()
  }, [categoryID]);

  console.log(products)

  return (
    <Box>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          <Heading className="tituloPrincipal">{title}</Heading>
          <ItemList data={products} />
        </>
      )}
    </Box>
  );
};
export default ItemListContainer;