const http=require('http');
const path=require('path');
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const dbConnection=require('./config/connection');

const app=express();
app.use(cors());
app.use(bodyParser.json());
const port=3000;
const userRoute=require('./routes/userRoute');

app.use('/user',userRoute);

app.listen(port,()=>{
    console.log(`Server Running on http://localhost:${port}`);
});