import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const releaseToken=()=>{
    sessionStorage.removeItem('adminToken');
  }
  return (
    <div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h6" textAlign={'left'}component="div" sx={{ flexGrow: 1 }}>
            EMPLOYEE APP
          </Typography>
          <Button color="inherit" >
            <Link to={'/home'} style={{backgroundColor:'white',color:'blue', textDecoration:"none",padding:'10px'}}>HOME</Link></Button>
          <Button color="inherit"><Link to={'/form'} style={{backgroundColor:'white',color:'blue', textDecoration:"none",padding:'10px'}}>Employee Form</Link></Button>
          <Button onClick={releaseToken} color="inherit"><Link to={'/'} style={{backgroundColor:'white',color:'blue', textDecoration:"none",padding:'10px'}}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar