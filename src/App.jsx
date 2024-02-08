import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (

      <ChakraProvider>
        <NavBar/>
        <ItemListContainer titulo='Blueberry Pasteleria' />
      </ChakraProvider>

  )
}

export default App
