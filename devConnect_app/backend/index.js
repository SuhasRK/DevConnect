require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

const userRoutes  = require('./routes/userRoutes');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/postRoutes');
const groupRoutes = require('./routes/groupRoute')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors()) // Use this after the variable declaration

const URL = process.env.DATABASE_URL;

mongoose.connect(URL).then((client)=>{
    console.log('Connection successful!!!');
})
.catch((err)=>{
    console.log('No connection',err);
})
app.use('/auth',authRoutes);
app.use('/users',userRoutes);
app.use('/posts',postRoutes);
app.use('/group',groupRoutes);

app.listen(3000,() => console.log("Server listening at port 3000"));