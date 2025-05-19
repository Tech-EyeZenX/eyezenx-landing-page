

import logger from "../middlewares/logger.middlewares.js"
import EyeTest from "../models/EyeTest.model.js";
//Get all sheduled test for a patient
export const sheduledTest = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);
    try {
        const sheduledTest = await EyeTest.find({ patientId: req.params.id });
        if (!sheduledTest) {
            return res.status(200).json({
                error: null,
                success: true,
                data: sheduledTest,
                message: "No test found"
            })
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: sheduledTest,
            message: "Test fetched successfully"
        })


    } catch (error) {
        logger.error("Error while fetching the sheduled test for a patient", error);
        return res.status(500).json({
            error: error,
            success: false,
            data: null,
            message: "Error while fetching the sheduled test for a patient"
        })
    }
}

// get upcoming test for all patients

export const UpcomingTestForPatients = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const todayDate = new Date();

        const upcomingTest = await EyeTest.find({ date: { $gte: todayDate } }).sort({ date: 1 });

        if (!upcomingTest) {
            return res.status(200).json({
                error: null,
                success: true,
                data: upcomingTest,
                message: "No test found"
            })
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: upcomingTest,
            message: "Test fetched successfully"
        })
    } catch (error) {
        logger.error("Error while fetching the upcoming test for all patients", error);
        return res.status(500).json({
            error: "Internal Server Error",
            success: false,
            data: null,
            message: "Error while fetching upcoming tests."
        });
    }
}

//search the patient by name or email or phone number
export const searchPatient = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const query = req.query.query;
        if (!query) {
            return res.status(400).json({
                error: "Query parameter is required",
                success: false,
                data: null,
                message: "Query parameter is required"
            });
        }

        const searchCriteria = {
            $or: [
                { name: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } },
                { phone: { $regex: query, $options: "i" } }
            ]
        };

        const patients = await EyeTest.find(searchCriteria);

        if (patients.length === 0) {
            return res.status(200).json({
                error: null,
                success: true,
                data: [],
                message: "No patient found"
            });
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: patients,
            message: "Patient fetched successfully"
        });

    } catch (error) {
        logger.error(`Error while searching the patient: ${error.message}`, { error });
        return res.status(500).json({
            error: error.message,
            success: false,
            data: null,
            message: "Error while searching the patient"
        });
    }
};

// shedule new eye test

export const scheduleEyeTest = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const { patientId, shopId, doctorId, examDate } = req.body;

        // Validation
        if (!patientId || !shopId || !doctorId) {
            return res.status(400).json({
                error: "Missing required fields",
                success: false,
                data: null,
                message: "patientId, shopId, and doctorId are required"
            });
        }

        const newEyeTest = new EyeTest({
            patientId,
            shopId,
            doctorId,
            examDate: examDate || undefined 
        });

        const savedTest = await newEyeTest.save();

        return res.status(201).json({
            error: null,
            success: true,
            data: savedTest,
            message: "Eye test scheduled successfully"
        });

    } catch (error) {
        logger.error("Error while scheduling eye test", error);
        return res.status(500).json({
            error: error.message,
            success: false,
            data: null,
            message: "Error while scheduling eye test"
        });
    }
};



