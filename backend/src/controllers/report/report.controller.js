import logger from "../../middlewares/logger.middlewares.js";
import Instruction from "../../models/Instruction.model.js";
import Report from "../../models/Report.model.js";

export const getPendingReports = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const reports = await Report.find({ verified: false });

        return res.status(200).json({
            error: null,
            success: true,
            data: reports,
            message: "Reports fetched successfully"
        })
    } catch (error) {
        logger.error("Reports not fetched", error);
        return res.status(500).json({
            error: error,
            success: false,
            data: null,
            message: "Reports not fetched"
        })
    }
}

export const getInstructions = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const report = await Report.findById(req.params.id);

        if (!report) {
            return res.status(404).json({
                error: null,
                success: false,
                data: null,
                message: "Report not found"
            });
        }

        const instructions = await Instruction.find({ reportId: report._id });

        if (instructions.length === 0) {
            return res.status(404).json({
                error: null,
                success: false,
                data: [],
                message: "No instructions found for this report"
            });
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: instructions,
            message: "Instructions fetched successfully"
        });

    } catch (error) {
        logger.error(`Error while fetching the instruction: ${error.message}`, { error });

        return res.status(500).json({
            error: error.message,
            success: false,
            data: null,
            message: "Error while fetching the instruction"
        });
    }
};




