import { Box, Button, TextField, Typography, colors } from '@mui/material'
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './EmployeeForm.css';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';



const EmployeeForm = (props) => {


const navigate=useNavigate();
const[formdata,setform]=useState(props.data);
const inputHandler=(e)=>{

setform({...formdata,[e.target.name]:e.target.value});
}

const addData=()=>{

  if(props.method==='post')
  {
console.log('clicked',formdata)
axiosInstance.post('/api/empform',formdata)

.then((res)=>{
alert(res.data.message);
console.log(res.data);
navigate('/home');

})
.catch((error)=>{
  console.log(error);
})}
if(props.method==='put')
{
axiosInstance.put('/api/update/'+formdata._id,formdata).then((res)=>{
alert(res.data.message);
console.log(res.data);
navigate('/home');
window.location.reload(false);
})
.catch((error)=>{
  console.log(error);

})

}

}



  return (
    <div>  
     <form className="employeeform" >
      <div className='form-row'>
     <label className="employeelabel">Name:</label>
     <TextField  id="fieldsinput"label="Please enter Name" variant="outlined"
     name='name'
     value={formdata.name}
     onChange={inputHandler}/>
     </div>
    
    <div className='form-row'>
    <label className="employeelabel">Designation:</label>
    <TextField id="fieldsinput" label="Please Enter Designation" variant="outlined" 
    name='designation'
    value={formdata.designation}
    onChange={inputHandler} />
    </div>
    <div className='form-row'>
    <label className="employeelabel">Location:</label>    
    <TextField id="fieldsinput" label="Please Enter Location" variant="outlined"
    name='location'
    value={formdata.location}
    onChange={inputHandler} />
    </div>
    <div className='form-row'>
    <label className="employeelabel">Salary:</label>
    <TextField id="fieldsinput" label="Please Enter Salary" variant="outlined"
    name='salary'
    value={formdata.salary}
    onChange={inputHandler} />
    </div>
    <Button onClick={addData}  color="inherit"style={{color:'white' ,backgroundColor:'blue'}}>Submit</Button>
    </form>
 </div>
  )
}

export default EmployeeForm