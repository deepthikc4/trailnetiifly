import { Box, Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  
  const[user,setUsers]=useState();
  const inputHandler=(e)=>{
    setUsers({...user,[e.target.name]:e.target.value})
    console.log(user);
    }

    const addHandler=()=>{
      console.log(user);
      axios.post("/api/login",user)
      .then((res)=>{
    
        console.log(res);
        alert(res.data.message);
// store token in frontend
        console.log(res.data.token);
        sessionStorage.setItem('adminToken',res.data.token);

        navigate('/home')
      })
      .catch((error)=>{

        console.log(error);
        
      })
    }

  return (
    <div>

{/* display: 'flex', justifyContent: 'center', alignItems: 'center' */}
 <Box align='center' style={{backgroundColor:'beige',border:'1px solid blue', width:'600px',margin:'0 auto',marginTop:'200px',padding:'20px' }}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Typography variant='h4' style={{color:'blue'}} >Employee App Login</Typography>
        <br />
      <div>
        <TextField
         
          id="Email"
          label="Email"
          name="username" 
          onChange={inputHandler}
        />
       
      
      </div>
      <div>
        <TextField
         
          id="Password"
          label="Password"
          name="password" 
          onChange={inputHandler}
        />       
      </div>
      <Button onClick={addHandler}variant='contained'style={{marginTop:'20px',color:'white',backgroundColor:'blue'}}>Login</Button>
     <br /><br />
     <Typography><Link  to={'/sign'}>New User Click Here</Link></Typography>
    </Box>

    </div>
  )
}

export default Login