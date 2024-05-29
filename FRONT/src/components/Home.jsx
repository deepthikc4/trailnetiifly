import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';

import { Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

const Home = () => {

   const [dataset,setData]=useState([]);


   useEffect(()=>{
    axiosInstance.get('/api/home').then((res)=>{
      console.log(res);
      setData(res.data);
    })
    
    },[])


   const deleteEmp=(id)=>{
    axiosInstance.delete('/api/delete/'+id).then((res)=>{
      alert(res.data.message);
      console.log(res.data);
      window.location.reload(false);
          })
          .catch((error)=>{
            console.log(error);
          })
   }


  //  update 
  const[update,setUpdate]=useState(false);
  const [value,setValue]=useState([]);

  const updateEmp=(data)=>{
    console.log(data);
    setUpdate(true);
    setValue(data);
  }
let finalJSX=(
  
    <TableContainer style={{border:'1px solid blue',backgroundColor:'beige',width:'1000px',margin:'200px',padding:'20px',paddingLeft:'100px'}} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow >
          
          <TableCell align='left' style={{ fontFamily:'Roboto',fontSize: '25px',color:'blue'}} >Name</TableCell>
          <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '25px',color:'blue'}}>Position</TableCell>
          <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '25px',color:'blue'}}>Office Location</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {dataset.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >            
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.designation}</TableCell>
            <TableCell align="left">{row.location}</TableCell>
            <TableCell>
            <Button onClick={()=>deleteEmp(row._id)} color="inherit" style={{backgroundColor:'blue',color:'white', textDecoration:"none",padding:'5px'}}>DELETE</Button>
            </TableCell>
            <TableCell >
            <Button onClick={()=>updateEmp(row)}color="inherit" style={{backgroundColor:'blue',color:'white', textDecoration:"none",padding:'5px'}}>UPDATE</Button>
            </TableCell>
            
            </TableRow>
        ))}
      </TableBody>
    </Table>
   
  </TableContainer>
)
  if(update) finalJSX=<EmployeeForm method='put'data={value}/>

     
  return (
    finalJSX
   );
};

export default Home