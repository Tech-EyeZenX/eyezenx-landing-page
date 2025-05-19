// Report which is verified but not sent

import { error } from "winston";
import Report from "../../models/Report.model.js";
import logger from "../middlewares/logger.middlewares.js";
import Doctor from "../models/Doctor.model.js";

export const verifiedButNotSent = async(req, res)=>{
    logger.info( `${req.method} ${req.url}` );

    try {
        const reports = await Report.find({verified:true,sentToPatient:false});

        if(!reports){
            return res.status(200).json({
                error:null,
                success:true,
                data:reports,
                message:"No reports found"
            })
        }

        return res.status(200).json({
            error:null,
            success:true,
            data:reports,
            message:"Reports fetched successfully"
        })
    } catch (error) {
        logger.error("Error while Verified but not sent Report fetching",error);
        return res.status(500).json({
            error:error,
            success:false,
            data:null,
            message:"Error while Verified but not sent Report fetching"
        })
    }
}

// Report which is verified
export const getVerifiedReports = async(req, res)=>{
    logger.info( `${req.method} ${req.url}` );
    try {
       const reports = await Report.find({verified:true});
       
       if(!reports){
        return res.status(200).json({
            error:null,
            success:true,
            data:reports,
            message:"No reports found"
        })
       }

       return res.status(200).json({
           error:null,
           success:true,
           data:reports,
           message:"Reports fetched successfully"
       })
    } catch (error) {
        logger.error("Error while Report fetching",error);
        return res.status(500).json({
            error:error,
            success:false,
            data:null,
            message:"Error while Report fetching"
        })
    }
}

// available doctors

export const availableDoctor = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const doctors = await Doctor.find({ availability: true });

        if (doctors.length === 0) {
            return res.status(404).json({
                error: null,
                success: false,
                data: [],
                message: "No doctors available"
            });
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: doctors,
            message: "Available doctors fetched successfully"
        });

    } catch (error) {
        logger.error("Error while fetching available doctors", error);

        return res.status(500).json({
            error: error.message,
            success: false,
            data: null,
            message: "Error while fetching available doctors"
        });
    }
};





