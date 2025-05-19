//get shopowner details

import logger from "../middlewares/logger.middlewares.js";
import Doctor from "../models/Doctor.model.js";
import OpticalShop from "../models/OpticalShop.model.js";

export const getShopOwnerDetails = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);
    try {
        const shopOwner = await OpticalShop.findById(req.params.id);

        if (!shopOwner) {
            return res.status(200).json({
                error: null,
                success: true,
                data: shopOwner,
                message: "Shop owner not found"
            })
        }

        return res.status(200).json({
            error: null,
            success: true,
            data: shopOwner,
            message: "Shop owner details fetched successfully"
        })
    } catch (error) {
        logger.error("Error while fetching the shop owner details", error);
        return res.status(500).json({
            error: error,
            success: false,
            data: null,
            message: "Error while fetching the shop owner details"
        })
    }
}



// Update the shopOwner

export const updateShopOwner = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const shopOwner = await OpticalShop.findById(req.params.id);
        if (!shopOwner) {
            return res.status(404).json({
                error: null,
                success: false,
                data: null,
                message: "Shop owner not found"
            });
        }

        const { email, name, phone, address, password } = req.body;

        // Create update object dynamically
        const updates = {};
        if (email) updates.email = email;
        if (name) updates.name = name;
        if (phone) updates.phone = phone;
        if (address) updates.address = address;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updates.password = hashedPassword;
        }

        await OpticalShop.updateOne({ _id: req.params.id }, { $set: updates });

        // Fetch updated data to return
        const updatedShopOwner = await OpticalShop.findById(req.params.id);

        return res.status(200).json({
            error: null,
            success: true,
            data: updatedShopOwner,
            message: "Shop owner updated successfully"
        });

    } catch (error) {
        logger.error(`Error while updating the shop owner details: ${error.message}`, { error });
        return res.status(500).json({
            error: error.message,
            success: false,
            data: null,
            message: "Error while updating the shop owner details"
        });
    }
};


// get all the doctors

export const getAllDoctors = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const doctors = await Doctor.find({})
        
        return res.status(200).json({
            error: null,
            success: true,
            data: doctors,
            message: "Doctors fetched successfully"
        })
    } catch (error) {
        logger.error("Error while fetching the doctors", error);
        return res.status(500).json({
            error: error,
            success: false,
            data: null,
            message: "Error while fetching the doctors"
        })
    }
}



