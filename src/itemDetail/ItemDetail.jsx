import React, { useState } from 'react'
import { Card, CardHeader, Heading, CardBody, Text, CardFooter} from '@chakra-ui/react'
import ItemCount from '../components/itemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({title, description, stock}) => {
    const [quantity, setQuantity] = useState()
    const onAdd = (cantidad) =>{
        setQuantity(cantidad)
        console.log(`Agregaste ${cantidad} productos`)
    }


  return (
    <div>
        <Card align='center'>
            <CardHeader>
                <Heading size='md'> {title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
            <CardFooter className='cardFooterContainer'>
                <ItemCount inventario={stock} initialValue={1} onAdd={onAdd}/>
            </CardFooter>
        </Card>
    </div>
  )
}

export default ItemDetail