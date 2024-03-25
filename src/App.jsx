import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/PageNotFound'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'



function App() {

  return (

      <ChakraProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element = {<ItemListContainer title = 'Blueberry Pasteleria'/>}/>
              <Route path='/categorias/:categoryID' element = {<ItemListContainer title ='Blueberry Pasteleria'/>}/>
              <Route path='/producto/:productID' element= {<ItemDetailContainer/>}/>
              <Route path='/cart' element = {<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='*' element={<PageNotFound/>}/>
            </Routes>  
          </BrowserRouter>
        </CartContextProvider>
      </ChakraProvider>

  )
}

export default App
