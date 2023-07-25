const express= require('express')
const app=express();
const dotenv=require('dotenv')
const connectDB = require('./config/db');
dotenv.config()
connectDB()
const router=require('./routes/router')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/books",router)
const PORT =process.env.PORT || 5000


app.listen(PORT ,()=>console.log('srver is running .... '))