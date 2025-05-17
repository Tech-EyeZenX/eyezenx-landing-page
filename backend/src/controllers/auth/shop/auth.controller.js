import logger from "../../../middlewares/logger.middlewares.js";
import OpticalShop from "../../../models/OpticalShop.model.js";
import { shopOwnerSignupSchema, showOwnerLoginSchema } from "../../../validations/shopOwner.validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    logger.info(`${req.method} ${req.url} - Register request`);

    try {
        const { email, password, name, address, phone } = req.body;

        //  Validate request body
        const { error } = shopOwnerSignupSchema.validate(req.body);
        if (error) {
            logger.error(`Validation error: ${error.details[0].message}`);
            return res.status(400).json({
                error: error.details[0].message,
                success: false,
                data: null
            });
        }

        //  Check if email already exists
        const existingUser = await OpticalShop.findOne({ email });
        if (existingUser) {
            logger.warn(`Registration failed: Email already exists - ${email}`);
            return res.status(400).json({
                error: "Email already exists",
                success: false,
                data: null
            });
        }

        //  Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //  Create the user
        const newUser = await OpticalShop.create({
            email,
            password: hashedPassword,
            name,
            address,
            phone
        });

        //  Generate JWT token
        const token = jwt.sign(
            {
                id: newUser._id,
                email: newUser.email,
                role: newUser.role
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        //  Exclude sensitive info from response
        const { password: _, __v, ...userData } = newUser.toObject();

        logger.info(`New user registered: ${newUser.email}`);

        return res.status(201).json({
            error: null,
            success: true,
            message: "User created successfully",
            data: {
                user: userData,
                token
            }
        });
    } catch (error) {
        logger.error("Registration failed", error);
        return res.status(500).json({
            error: "Something went wrong",
            success: false,
            data: null
        });
    }
};

export const login = async (req, res) => {
    logger.info(`${req.method} ${req.url}`);

    // Joi validation
    const { error } = showOwnerLoginSchema.validate(req.body);
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

        // check if showowner exists
        const shopowner = await OpticalShop.findOne({ email });

        if (!shopowner) {
            logger.error("Showowner not found with provided email");
            return res.status(404).json({
                error: "Showowner not found",
                success: false,
                data: null
            });
        }

        // compare password

        const isMatch = await bcrypt.compare(password, shopowner.password);

        if (!isMatch) {
            logger.error("Invalid password");
            return res.status(401).json({
                error: "Invalid password",
                success: false,
                data: null
            });
        }

        // create token 
        const token = jwt.sign({
            id: shopowner._id,
            email: shopowner.email,
            role: shopowner.role
        }, process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h"
            })

        //remove password from response
        const { password: _, __v, ...shopownerData } = shopowner.toObject();

        //send response
        return res.status(200).json({
            error: null,
            success: true,
            message: "Login successful",
            data: {
                shopownerData,
            },
            token
        })
    } catch (error) {
        logger.error("Error in shopowner login", error);
        return res.status(500).json({
            error: "Something went wrong",
            success: false,
            data: null
        })
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
            })
        }

        const decodedToken = admin.auth().verifyIdToken(idToken);
        const email = decodedToken.email;

        logger.info(`Google login attempt for email: ${email}`);

        const shopowner = await OpticalShop.findOne({ email });

        if (!shopowner) {
            logger.error(`Shopowner not found for email: ${email}`);
            return res.status(404).json({
                error: "User not found, please register first",
                success: false,
                data: null
            });
        }

        //create token 
        const token = jwt.sign({
            id: shopowner._id,
            email: shopowner.email,
            role: shopowner.role
        }, process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h"
            })

        // Remove password from response
        const { password: _, __v, ...shopownerData } = shopowner.toObject();
        //send response
        return res.status(200).json({
            error: null,
            success: true,
            message: "Login successful",
            data: {
                shopownerData,
            },
            token
        })
    } catch (error) {
        logger.error("Error in google login", error);
        return res.status(500).json({
            error: "Something went wrong",
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

        const shopowner = await OpticalShop.findOne({ email, phone });

        if (!shopowner) {
            logger.error(`Shopowner not found for email ${email} and phone ${phone}`);
            return res.status(404).json({
                error: "User not found, please register first",
                success: false,
                data: null
            });
        }

        //create token 
        const token = jwt.sign({
            id: shopowner._id,
            email: shopowner.email,
            role: shopowner.role
        }, process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h"
            })

        // Remove password from response
        const { password: _, __v, ...shopownerData } = shopowner.toObject();
        //send response
        return res.status(200).json({
            error: null,
            success: true,
            message: "Login successful",
            data: {
                shopownerData,
            },
            token
        })
    } catch (error) {
        logger.error("Error in google login with phone", error);
        return res.status(500).json({
            error: "Something went wrong",
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

