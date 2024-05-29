const express=require('express');
const router=express.Router();
const employeedetails=require('../model/employee');
const jwt=require('jsonwebtoken');



router.use(express.json());


// verify token
function verifytoken(req,res,next){
    const token=req.headers.token;
    
    try {
        if(!token) throw 'unauthorized access';
    // extract payload
    let payload=jwt.verify(token,'reactemployeeapp');
    if(!payload)throw 'unauthorized access';
    
    next()
    
    } catch (error) {
        res.status(404).send('caught in error');
    }
    
    }
// for creting new employee--- employee form 

router.post('/empform',verifytoken,async(req,res)=>{

    try {
       const data=req.body;
       const newEmployee=await employeedetails(data).save();
       console.log(newEmployee);
       if(newEmployee)
       {
       
       res.status(200).send({message:'New employee Added successfully'})
    }

    } catch (error) {
        res.status(400).send({message:'failed'})
    }
    }
)


// Display employee details in Home page

router.get('/home',verifytoken,(req,res)=>{

    try {
        employeedetails.find().then((empdetails)=>{
            res.status(200).send(empdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display employee details"}) 
    }
})

// display employee details in normal user dashboard
// router.get('/userhome',(req,res)=>{

//     try {
//         employeedetails.find().then((empdetails)=>{
//             res.status(200).send(empdetails);
//         })
//     } catch (error) {
//        res.status(404).send({Message:"can not display employee details"}) 
//     }
// })



router.delete('/delete/:id',verifytoken,async(req,res)=>{

try {
let id=req.params.id;
console.log(id);
const deletedemp=await employeedetails.findByIdAndDelete(id);
console.log(deletedemp);
if(!deletedemp){
    return res.status(404).json({error:`no data found`});
   
}
res.status(200).send({message:"employee deleted Successfully"})

} catch (error) {
    res.status(400).json({ error: 'Bad Request' });
}
})




router.put('/update/:id',verifytoken,async(req,res)=>{
    try {
        let id=req.params.id;
        const updatedemployee= await employeedetails.findByIdAndUpdate(id, req.body);
        console.log(updatedemployee);
        if(!updatedemployee)
        {
            console.log("no employee found");
           return res.status(404).json({error:`no data found`});
        }
        res.status(200).send({message:`data updated successfully`});
    } catch (error) 
    {
        res.status(400).json({ error: 'Bad Request' });
    }
})


module.exports=router;