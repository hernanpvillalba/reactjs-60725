import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByID } from '../../data/asyncMock'
import ItemDetail from '../../itemDetail/ItemDetail';
import { Spinner } from '@chakra-ui/react';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState (true)
    const {productID} = useParams ()

    useEffect (() =>{
        setLoading(true)
        getProductsByID(productID)
        .then ((el) => setProduct(el))
        .catch ((err) => console.log(err))
        .finally (() => setLoading(false))

    },[])

  return (
    <div>
        {
            loading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />:
            <ItemDetail {...product}/>
          

        }
        

    </div>
  );
};

export default ItemDetailContainer