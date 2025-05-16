import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "patient"
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dateOfBirth: { 
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    historyOfPatient: { 
        type: [String],
    }
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
