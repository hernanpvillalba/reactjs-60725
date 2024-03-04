import { Box, Center, Heading, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'  
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([]) 
  const [loading, setLoading] = useState(true)
  const {categoryID} = useParams ()

  useEffect(() =>{  
    setLoading(true)
    const dataProducts = categoryID ? getProductsByCategory (categoryID) : getProducts()
    dataProducts
      .then((el) =>setProducts(el))
      .catch ((err) => console.log(err))
      .finally(() => setLoading(false))
  },[categoryID])


  return(
    <Box className='productsContainer'>
       
      {
        loading ? <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />:
        <>
          <Heading className='tituloPrincipal'>{title}</Heading>
          <ItemList data = {products}/>
        </>
      }
    </Box>
  );
};
export default ItemListContainer