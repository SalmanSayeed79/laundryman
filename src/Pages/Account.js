import React from 'react'
import { Typography,Box,Avatar,Button } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PreviewIcon from '@mui/icons-material/Preview';
import DetailsIcon from '@mui/icons-material/Details';
export default function Account() {
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            <Typography variant="h3" color="primary" sx={{marginTop:"1rem"}}>Your Account</Typography>
            <Typography variant="p"   sx={{marginBottom:"1rem"}}>Your account information</Typography>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                <Avatar alt="Salman Sayeed" src="/static/images/avatar/1.jpg" sx={{width:{xs:"30vw",md:"7vw"},height:{xs:"30vw",md:"7vw"}}}/>
                <Typography variant="h5">Salman Sayeed</Typography>
                <Typography variant="p" color="#8f8f8f">Rd No 13 , Dhanmondi</Typography>
                <Typography variant="h5"></Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw"}}>
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} >
                    <InfoIcon />
                    Your account information
                </Button>

                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}}>
                    <PreviewIcon/>
                    Your previous orders
                </Button>

                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}}>
                    <StarBorderIcon/>
                    Track current orders
                </Button>
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}}>
                    <VpnKeyIcon/>
                    Change Password
                </Button>
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}}>
                    <DetailsIcon/>
                    Change Your Details
                </Button>
            </Box>
        </Box>
    )
}
