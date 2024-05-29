import { Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import axios from'axios';
import {useNavigate,Link} from 'react-router-dom';

// margin:'10% 10% 10% 10%'
const Signup = () => {

  const navigate=useNavigate();

  const [users,setUsers]=useState();
  
const inputHandler=(e)=>{
setUsers({...users,[e.target.name]:e.target.value})
console.log(users);
}

const addHandler=()=>{
  // to check button working or not
  console.log("clicked");
  // integration
  axios.post("/api/",users)
  .then((res)=>{

    console.log(res);
    alert(res.data.message);
    navigate('/')
  })
  .catch((error)=>{})
}
  return (
    
    <div align='center' style={{marginTop:"10%"}}>
            
<Grid container spacing={2}  style={{width:'900px', border:'1px solid blue',padding:'20px',marginTop:'50px',backgroundColor:'beige',marginBottom:'50px'}}>

<Grid item xs={12} sm={12} md={12} >
<Typography variant='h3' style={{margin:'10px',fontFamily:'lucida',color:'blue'}} >Employee App Signup</Typography>
  </Grid>
  <Grid item xs={6} sm={6} md={6}>
    <TextField fullWidth label="Name"
     name="name" 
     onChange={inputHandler}/>
  </Grid>
  <Grid item xs={6} sm={6} md={6} >
  <TextField fullWidth label="Email"name="email"onChange={inputHandler} />
  </Grid>
  <Grid item xs={12} sm={12} md={12} >
  <TextField fullWidth label="Address"  multiline maxRows={4}name="address" onChange={inputHandler}/>
   
  </Grid>
  
  <Grid item xs={6}>
  <TextField fullWidth label="UserName" name="username" onChange={inputHandler}/> 
  </Grid>
  <Grid item xs={6}>
  <TextField fullWidth label="Password" name="password" onChange={inputHandler}/>
  </Grid>
  <Grid item xs={12}>
  <button onClick={addHandler} style={{  padding:'10px',fontSize:'20px',width:'200px',backgroundColor:'blue',color:'white'} } >SignUp</button>
   
  </Grid>
  
</Grid>
<Grid item xs={12}>
<Typography>
<Link to={'/'}>
Back to Login
</Link>

</Typography>

</Grid>


</div>
  )
}

export default Signup