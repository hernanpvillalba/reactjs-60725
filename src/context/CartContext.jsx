import React, {createContext, useState} from 'react';

const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) =>{
        const newItem = {
            ...productToAdd,
            quantity,
        }
        if(isInCart(newItem.id)){
            const updatedCart = cart.map((el) =>{
                if(el.id === newItem.id){
                    return{...el, quantity: el.quantity + newItem.quantity}
                }
                return el
            })
            setCart (updatedCart)
        }else{
        setCart([...cart, newItem])
        }
    }

    const isInCart = (id) =>{
        return cart.some((el) => el.id === id)
    }

    const getTotal = () =>{
        return cart.reduce((actual, item) => actual + item.precio * item.quantity, 0)
    }

    const getQuantity = () =>{
        return cart.reduce ((actual, item) => actual + item.quantity,0)
    }

    const removeItem = (id) =>{
        const deleteItem = cart.filter ((el) => el.id !== id)
        return setCart ([...deleteItem])
    }

    const clearCart = () =>{
        return setCart([])
    }

    return(
        <Context.Provider
        value={{
            cart,
            setCart,
            addItem,
            getTotal,
            getQuantity,
            removeItem,
            clearCart,
        }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context