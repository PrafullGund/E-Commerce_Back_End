const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require('./config/connection');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;
const userRoute = require('./routes/userRoute');
const productsRoute=require('./routes/productsRoute');
const orderRoute=require('./routes/orderRoute');
const categoryRoute=require('./routes/categoryRoute');

app.use('/user', userRoute);
app.use('/products',productsRoute);
app.use('/order',orderRoute);
app.use('/category',categoryRoute);

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});