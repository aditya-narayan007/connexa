import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

main().catch(err => console.log(err));
async function main() {
    try{
        await mongoose.connect('mongodb+srv://2005adityagoswami_db_user:2VwpxWDYU56U3Fxc@connexa.ywa4a5q.mongodb.net/');
        app.listen(9090,() =>{
        console.log("port is listening at 9090");
        })
    }
    catch(err){
        console.log(err);
    }
};
main();