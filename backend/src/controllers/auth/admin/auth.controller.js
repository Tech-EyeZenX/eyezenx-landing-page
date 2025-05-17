import Admin from "../../../models/Admin.model.js";
import { adminLoginSchema, adminSignupSchema } from "../../../validations/admin.validation.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    try {
        const { email, password, name, profilePicture } = req.body;

        const { error } = adminSignupSchema.validate(req.body);
        if (error) {
            logger.error("Validation error in register", error.details[0].message);
            return res.status(400).json({
                error: error.details[0].message,
                success: false,
                data: null
            });
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            logger.error("Admin already exists");
            return res.status(400).json({
                error: "Admin already exists",
                success: false,
                data: null
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
            email,
            password: hashedPassword,
            name,
            profilePicture
        });

        await newAdmin.save();
        // token generation
        const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        // remove password from response

        const { password: _, ...adminWithoutPassword } = newAdmin.toObject();
        logger.info("Admin registered successfully");

        return res.status(201).json({
            error: null,
            success: true,
            message: "Admin registered successfully",
            data: {
                admin: adminWithoutPassword,
                token
            }
        });
    } catch (err) {
        logger.error("Unexpected error in register", err);
        return res.status(500).json({
            error: "Internal server error",
            success: false,
            data: null
        });
    }
};

export const login = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);
    // validate with JOI
    const {error} = adminLoginSchema.validate(req.body);
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

        const admin = await Admin.findOne({ email });
        if (!admin) {
            logger.error("Admin not found");
            return res.status(404).json({
                error: "Admin not found",
                success: false,
                data: null
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            logger.error("Invalid credentials");
            return res.status(401).json({
                error: "Invalid credentials",
                success: false,
                data: null
            });
        }

        logger.info("Admin logged in successfully");
        // token generation
        const token = jwt.sign({ id: admin._id , role: "admin", email}, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        // remove password from response
        const { password: _, ...adminWithoutPassword } = admin.toObject();

        return res.status(200).json({
            error: null,
            success: true,
            message: "Admin logged in successfully",
            data: {
                adminWithoutPassword
                token
            },
        });
    } catch (err) {
        logger.error("Unexpected error in login", err);
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

        const admin = await Admin.findOne({ email });

        if (!admin) {
            logger.error(`Admin not found for email: ${email}`);
            return res.status(404).json({
                error: "User not found, please register first",
                success: false,
                data: null
            });
        }

        logger.info("Admin logged in successfully");
        // token generation
        const token = jwt.sign({ id: admin._id , role: "admin", email}, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        
        // remove password

        const { password: _, ...adminWithoutPassword } = admin.toObject();

        return res.status(200).json({
            error: null,
            success: true,
            message: "Admin logged in successfully",
            data: {
                adminWithoutPassword
                token
            },
        });
    } catch (err) {
        logger.error("Unexpected error in googleLogin", err);
        return res.status(500).json({
            error: "Internal server error",
            success: false,
            data: null
        });
    }
}


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
       
        const admin = await Admin.findOne({ email, phone });

        if (!admin) {
            logger.error(`Admin not found for email ${email} and phone ${phone}`);
            return res.status(404).json({
                error: "User not found, please register first",
                success: false,
                data: null
            });
        }

        logger.info("Admin logged in successfully");
        // token generation
        const token = jwt.sign({ id: admin._id , role: "admin", email}, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        // remove password

        const { password: _, ...adminWithoutPassword } = admin.toObject();
        return res.status(200).json({
            error: null,
            success: true,
            message: "Admin logged in successfully",
            data: {
                adminWithoutPassword,
                token
            }
        });
    } catch (err) {
        logger.error("Unexpected error in googleLoginWithPhone", err);
        return res.status(500).json({
            error: "Internal server error",
            success: false,
            data: null
        });
    }
}


export const Logout = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);
    res.clearCookie("token");
    return res.status(200).json({
        error: null,
        success: true,
        message: "Logout successful",
        data: null
    });
};  

