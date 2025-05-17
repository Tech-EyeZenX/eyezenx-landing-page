import mongoose from "mongoose";
import logger from "../middlewares/logger.middlewares.js";

export const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI).then(()=>{ 
            logger.info("Database connected");
        }).catch((err)=>{
            logger.error("Database connection error", err);
        })
    }catch(err){
        logger.error("Database connection error", err);
    }
}