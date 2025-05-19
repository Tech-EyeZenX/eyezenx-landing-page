//get patient Info

import logger from "../middlewares/logger.middlewares";
import Patient from "../models/Patient.model.js";

export const getPatientInfo = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(200).json({
                error: null,
                success: true,
                data: patient,
                message: "Patient not found"
            })
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: patient,
            message: "Patient info fetched successfully"
        })
    } catch (error) {
        logger.error("Error while fetching the patient info", error);
        return res.status(500).json({
            error: error,
            success: false,
            data: null,
            message: "Error while fetching the patient info"
        })
    }
}


// Get all reports for specific patient 


export const getPatientReports = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const reports = await Report.find({ patientId: req.params.id });

        if (reports.length === 0) {
            return res.status(404).json({
                error: null,
                success: false,
                data: [],
                message: "No reports found for this patient"
            });
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: reports,
            message: "Reports fetched successfully"
        });

    } catch (error) {
        logger.error(`Error while fetching the patient reports: ${error.message}`, { error });

        return res.status(500).json({
            error: error.message,
            success: false,
            data: null,
            message: "Error while fetching the patient reports"
        });
    }
};



//updated the patient details

export const updatePatient = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(400).json({
                error: "Patient ID is required",
                success: false,
                data: null,
                message: "Missing patient ID"
            });
        }

        const updatedPatient = await Patient.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!updatedPatient) {
            return res.status(404).json({
                error: null,
                success: false,
                data: null,
                message: "Patient not found"
            });
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: updatedPatient,
            message: "Patient updated successfully"
        });
    } catch (error) {
        logger.error("Error while updating the patient", error);
        return res.status(500).json({
            error: error.message,
            success: false,
            data: null,
            message: "Internal server error while updating the patient"
        });
    }
};
