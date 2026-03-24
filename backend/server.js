import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from './routes/posts.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(postRoutes)
app.use(express.json());

main().catch(err => console.log(err));
async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(9090,() =>{
        console.log("port is listening at 9090");
        })
    }
    catch(err){
        console.log(err);
    }
};
main();