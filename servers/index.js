import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './routes/userRoute.js';

const app=express();

app.use(bodyParser.json())
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 7000;
const URL=process.env.MONGOURL;

mongoose.connect(URL).then(()=>{

    console.log("connected succesfully");

    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
    })


}).catch((error)=>console.log(error))


app.use("/api",route);