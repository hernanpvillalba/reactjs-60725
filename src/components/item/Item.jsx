import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({title,price, pictureURL, stock, id}) => {
  return (
    <Card className='card'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
    <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src= {pictureURL}
    alt={title}
    borderRadius='lg'
    boxSize='100%'
    h= '200px'
    />

    <Stack mt='6' spacing='3' >
      <CardBody>
        <Heading size='md'>{title}</Heading>
      </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue' mr='2'>
        Precio: ${price}
      </Button>
      <Button variant='solid' colorScheme='blue'>
        <Link to={`/producto/${id}`}>
        Ver Detalle
        </Link>
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default Item