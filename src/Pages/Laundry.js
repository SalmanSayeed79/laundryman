import React from 'react'
import { Typography,Box } from '@mui/material'
import LaundryItem from '../Components/LaundryItem'
export default function Laundry() {
    const laundryItems=[{
        name:"Shirt",
        icon:"https://i.postimg.cc/G2Kv5Sq8/womans-shirt-78083.png",
        price:10,
        key:1
        },
        {
        name:"T-Shirt",
        icon:"https://i.postimg.cc/LX8WrmCp/shirt.png",
        price:10,
        key:1
        },
        {
        name:"Pants",
        icon:"https://i.postimg.cc/tg0dZ6sT/red-pants-icon-icons-com-54600.png",
        price:10,
        key:1
        },
        {
        name:"Punjabi",
        icon:"https://i.postimg.cc/W469s85j/kurta.png",
        price:10,
        key:1
        },
        {
        name:"Payjama",
        icon:"https://i.postimg.cc/1314DrrL/womans-jeans-78095.png",
        price:10,
        key:1
        },
        {
        name:"Blazer",
        icon:"https://i.postimg.cc/sxZDhMQj/mens-blazer-78094.png",
        price:10,
        key:1
        },
        {
        name:"Kameez",
        icon:"https://i.postimg.cc/hj1N3gkL/dirndl.png",
        price:10,
        key:1
        },
        {
        name:"Long Dress",
        icon:"https://i.postimg.cc/4xp70S3f/tunic-dress-78092.png",
        price:10,
        key:1
        },
        {
        name:"Cushion Cover",
        icon:"https://i.postimg.cc/bvJGvNTJ/pillow.png",
        price:10,
        key:1
        },
        {
        name:"Sofa Cover",
        icon:"https://i.postimg.cc/hPsP7Rh7/pillow-1.png",
        price:10,
        key:1
        },
        {
        name:"Curtains",
        icon:"https://i.postimg.cc/tT6411VX/curtains.png",
        price:10,
        key:1
        }
        
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            <Typography variant="h3" color="primary" sx={{marginTop:"1rem"}}>Laundry Page</Typography>
            <Typography variant="p"  sx={{marginBottom:"1rem"}}>Order your items for pickup request</Typography>
            {/**Laundry Items */}
            <Box sx={{marginBottom:{xs:"7vh",md:"0"}}}>
                {laundryItems.map(item=>(<LaundryItem name={item.name} icon={item.icon} price={item.price}/>))}
            </Box>
        </Box>
    )
}
