import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import Item from './components/item/Item'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemCount from './components/itemCount/ItemCount'



function App() {

  return (

      <ChakraProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<ItemListContainer title = 'Blueberry Pasteleria'/>}/>
            <Route path='/categorias/:categoryID' element = {<ItemListContainer title ='Blueberry Pasteleria'/>}/>
            <Route path='/producto/:productID' element= {<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>Error 404</h1> }/>
          </Routes>  
        </BrowserRouter>
      </ChakraProvider>

  )
}

export default App
