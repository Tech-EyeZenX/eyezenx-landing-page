import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    },
    role: {
        type: String,
        default: "doctor"
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    licenseNumber: { 
        type: String,
        required: true 
    },
    specialty: {
        type: String,
        required: true 
    },
    experience: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: "https://www.alamy.com/stock-photo/medical-doctor-profile-icon-male.html?page=2"
    },
    shopId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "OpticalShop" 
    },
    availability: {
        type: Boolean,
        default: true
    }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
