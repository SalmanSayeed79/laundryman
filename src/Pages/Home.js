import React from 'react'
import {Box,Typography,AppBar,Toolbar,IconButton,Paper} from "@mui/material"
import Carousel from 'react-material-ui-carousel'

const CarouselItem=(props)=>{
    return(
        <Box component="img" src={props.imgSrc} sx={{width:{xs:"90vw",md:"40vw"},borderRadius:"50px"}}/>
    )
}

export default function Home() {
    const carouselItems=[
        {
            title:"Helo",
            imgSrc:"https://i.postimg.cc/mrTtK0v8/50292.jpg",
            key:1
        },
        {
            title:"Helo",
            imgSrc:"https://i.postimg.cc/G3zwj6Kb/3074.jpg",
            key:2
        },
        {
            title:"Helo",
            imgSrc:"https://i.postimg.cc/tCHkYgWT/unrecognizable-man-ironing-shirts-laundry-home.jpg",
            key:3
        },
        {
            title:"Helo",
            imgSrc:"https://i.postimg.cc/Y2QfKwZw/front-view-pile-towels-with-iron.jpg",
            key:4
        },
        {
            title:"Helo",
            imgSrc:"https://i.postimg.cc/Y2QfKwZw/front-view-pile-towels-with-iron.jpg",
            key:4
        },
        {
            title:"Helo",
            imgSrc:"https://i.postimg.cc/65g9dD6y/young-african-american-man-doing-laundry.jpg",
            key:5
        },
        {
            title:"Helo",
            imgSrc:"https://i.postimg.cc/65g9dD6y/young-african-american-man-doing-laundry.jpg",
            key:5
        },
    ]
    return (
        <Box > 
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
                <Typography variant="h3" color="primary">
                LaundryMan
                </Typography>
                <Typography>
                    Welcome to the best laundry experience in Bangladesh
                </Typography>
                <Carousel>
                    {carouselItems.map((a)=><CarouselItem key={a.key} imgSrc={a.imgSrc}/>)}
                </Carousel>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4"}}>
            
            </Box>
        </Box>
    )
}
