import React,{useState} from 'react'
import { Typography,Box,Button,Paper } from '@mui/material'
import {useCart, useCartEmpty} from '../Hooks/CartContextProvider'
import CartItem from '../Components/CartItem'
export default function Cart() {
    const cartItems=useCart()
    const cartEmpty=useCartEmpty()
    console.log(cartItems.length)
 
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",minHeight:"100vh",backgroundColor:"#2196f3",marginTop:{md:"7vh"}}}>
            <Typography variant="h3" color="white" sx={{marginTop:"1rem"}}>Cart Page</Typography>
            <Typography variant="p" color="#f4f4f4"  sx={{marginBottom:"1rem"}}>Confirm your order request </Typography>
            <Box sx={{minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:{xs:"5vh",md:"0"}}}>
            {cartItems.length!=0 && cartItems.map(a=>{
                console.log(a)
                return(<CartItem name={a.name} price={a.price} count={a.count}/>
            )})}
            {cartItems.length!=0 && <Button variant="contained" size="large" onClick={cartEmpty} >Order</Button>}
            {cartItems.length==0 && <Paper elevation={5} sx={{width:"80vw",height:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><Typography>Your Cart is empty</Typography></Paper>}
            </Box>
        </Box>
    )
}
