import logger from "../../../middlewares/logger.middlewares.js";
import Doctor from "../../../models/doctor.model.js";
import { doctorLoginSchema, doctorSignupSchema } from "../../../validations/doctor.validation.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import admin from "../../../config/firebase.js";


export const register = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    // Joi validation
    logger.info("Registering doctor");

    const { email, password, name, address, phone, licenseNumber, specialty, experience } = req.body;

    const { error } = doctorSignupSchema.validate(req.body);
    if (error) {
        logger.error("Validation error in register", error.details[0].message);
        return res.status(400).json({
            error: error.details[0].message,
            success: false,
            data: null
        });
    }

    try {

        // Check if doctor already exists
        const isDoctorPresent = await Doctor.findOne({ email });
        if (isDoctorPresent) {
            logger.error("Email already exists");
            return res.status(400).json({
                error: "Email already exists",
                success: false,
                data: null
            });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create new doctor
        const doctor = new Doctor({
            email,
            password: hashPassword,
            name,
            address,
            phone,
            licenseNumber,
            specialty,
            experience
        });

        // Save doctor to DB
        await doctor.save();

        // Generate token
        const token = jwt.sign(
            { id: doctor._id, role: doctor.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        logger.info("Doctor registered successfully");

        // Remove password from response
        const { password: _, ...doctorData } = doctor.toObject();

        return res.status(201).json({
            error: null,
            success: true,
            data: doctorData,
            message: "Doctor registered successfully",
            token
        });
    } catch (err) {
        console.log(err);
        logger.error("Error in register function", err.message);
        return res.status(500).json({
            error: "Internal server error",
            success: false,
            data: null
        });
    }
};



export const login = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    // Joi validation
    const { error } = doctorLoginSchema.validate(req.body);
    if (error) {
        logger.error("Validation error in login", error.details[0].message);
        return res.status(400).json({
            error: error.details[0].message,
            success: false,
            data: null
        });
    }

    try {
        const { email, password } = req.body;

        // Check if doctor exists
        const doctor = await Doctor.findOne({ email });
        if (!doctor) {
            logger.error("Doctor not found with provided email");
            return res.status(404).json({
                error: "Doctor not found",
                success: false,
                data: null
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            logger.error("Invalid credentials");
            return res.status(401).json({
                error: "Invalid credentials",
                success: false,
                data: null
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: doctor._id, email: doctor.email, role: doctor.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        // Remove password from response
        const { password: _, __v, ...doctorData } = doctor.toObject();

        return res.status(200).json({
            error: null,
            success: true,
            message: "Login successful",
            data: doctorData,
            token
        });

    } catch (err) {
        logger.error("Error in login function", err.message);
        return res.status(500).json({
            error: "Internal server error",
            success: false,
            data: null
        });
    }
};


export const googleLogin = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({
                error: "Id token is required",
                success: false,
                data: null
            });
        }

        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const email = decodedToken.email;

        logger.info(`Google login attempt for email: ${email}`);

        const doctor = await Doctor.findOne({ email });

        if (!doctor) {
            logger.error(`Doctor not found for email: ${email}`);
            return res.status(404).json({
                error: "User not found, please register first",
                success: false,
                data: null
            });
        }

        const token = jwt.sign(
            {
                id: doctor._id,
                email: doctor.email,
                role: doctor.role
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        const { password, __v, ...doctorData } = doctor.toObject();

        return res.status(200).json({
            error: null,
            success: true,
            message: "Google login successful",
            data: doctorData,
            token
        });

    } catch (error) {
        logger.error("Google login failed", error.message);
        return res.status(401).json({
            error: "Invalid Google token",
            success: false,
            data: null
        });
    }
};


export const googleLoginWithPhone = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const { idToken, phone } = req.body;

        if (!idToken || !phone) {
            return res.status(400).json({
                error: "ID token and phone number are required",
                success: false,
                data: null
            });
        }

        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const email = decodedToken.email;

        logger.info(`Verifying Google user with email: ${email} and phone: ${phone}`);

        const doctor = await Doctor.findOne({ email, phone });

        if (!doctor) {
            logger.error(`Doctor not found for email ${email} and phone ${phone}`);
            return res.status(404).json({
                error: "User not found, please register first",
                success: false,
                data: null
            });
        }

        const token = jwt.sign(
            {
                id: doctor._id,
                email: doctor.email,
                role: doctor.role
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        const { password, __v, ...doctorData } = doctor.toObject();

        return res.status(200).json({
            error: null,
            success: true,
            message: "Google login successful",
            data: doctorData,
            token
        });

    } catch (error) {
        logger.error("Google login with phone failed", error.message);
        return res.status(401).json({
            error: "Invalid or expired token",
            success: false,
            data: null
        });
    }
};


export const LogOut = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);
    res.clearCookie("token");
    return res.status(200).json({
        error: null,
        success: true,
        message: "Logout successful",
        data: null
    });
};  

