import { Badge, Divider, IconButton,  Toolbar, Typography, makeStyles } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = () => {
    
  return (
    <div>
        <Toolbar >
         <IconButton color ="inherit">
           <MenuIcon></MenuIcon>
         </IconButton>
        
         <Typography style={{  flexGrow : 1}} variant = "h5" >SpringBoot & React   </Typography>

         <IconButton color ="inherit" >
         <Badge  badgeContent={4} color="primary"></Badge>
           <NotificationsIcon style={{ width: '30px', height: '30px' }} ></NotificationsIcon>
         </IconButton>

         <Stack direction="row">
            <Avatar  style={{ width: '60px', height: '60px' }} alt="pic" src="src/assets/picofme4.png" />
        </Stack>
        </Toolbar>

        <Divider></Divider>

        

    </div>
  )
}

export default Navbar
