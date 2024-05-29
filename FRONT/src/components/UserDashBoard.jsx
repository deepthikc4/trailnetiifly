// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


// const UserDashBoard = () => {

//    const [dataset,setData]=useState([]);


//    useEffect(()=>{
//     axios.get('http://localhost:3005/api/userhome').then((res)=>{
//       console.log(res);
//       setData(res.data);
//     })
    
//     },[])

   

  
// return(
  
//     <TableContainer style={{border:'1px solid blue',backgroundColor:'beige',width:'1000px',margin:'200px',padding:'20px',paddingLeft:'100px'}} component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow >
          
//           <TableCell align='left' style={{ fontFamily:'Roboto',fontSize: '25px',color:'blue'}} >Name</TableCell>
//           <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '25px',color:'blue'}}>Position</TableCell>
//           <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '25px',color:'blue'}}>Office Location</TableCell>
         
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {dataset.map((row) => (
//           <TableRow
//             key={row.name}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >            
//             <TableCell align="left">{row.name}</TableCell>
//             <TableCell align="left">{row.designation}</TableCell>
//             <TableCell align="left">{row.location}</TableCell>
           
            
//             </TableRow>
//         ))}
//       </TableBody>
//     </Table>
   
//   </TableContainer>
// )
 

// };

// export default UserDashBoard