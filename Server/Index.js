import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./Routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("DB is connected successfully");

    app.listen(PORT, ()=>{
        console.log(`App is running on port: ${PORT}`);
        
    })


    app.get('/', (req, res)=>{
        res.send('ok');
    })


}).catch((err) => {
    console.log(err)
});

app.use('/api', route);