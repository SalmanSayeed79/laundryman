import React , {createContext, useState, useContext} from 'react'
import useLocalStorage from './useLocalStorage'

const CartContext=createContext()
const CartUpdateContext=createContext()
const CartEmptyContext=createContext()

export function useCart(){
    return useContext(CartContext)
}
export function useCartUpdate(){
    return useContext(CartUpdateContext)
}
export function useCartEmpty(){
    return useContext(CartEmptyContext)
}
export default function CartContextProvider({children}){
    const [cart,setCart]=useLocalStorage("cart",[])

    const addToCart=(data)=>{
        setCart(prev=>[...prev,data])
    }
    const emptyCart=(data)=>{
        setCart([])
    }
    return(
        <CartContext.Provider value={cart}>
            <CartUpdateContext.Provider value={addToCart}>
                <CartEmptyContext.Provider value={emptyCart}>
                    {children}
                </CartEmptyContext.Provider>
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}