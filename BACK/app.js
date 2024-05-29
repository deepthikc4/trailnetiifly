const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const db=require('./db/connection');
dotenv.config();

const PORT=process.env.PORT;
const app=new express();

// for deployment
const path = require('path'); 
app.use(express.static(path.join(__dirname,'/build'))); 


app.use(morgan('dev'));

const userRoute=require('./routes/userRoutes');
 const empRoute=require('./routes/emplyeeRoutes');
const cors=require('cors');





app.use(cors());

app.use('/api',userRoute);

 app.use('/api',empRoute);





app.get('/*', function(req, res) { 
res.sendFile(path.join(__dirname,'/build/index.html')); }); 


app.listen(PORT,(req,res)=>{

    console.log(`Server is running ${PORT}`);
})