import mongoose from "mongoose";

const eyeTestSchema = new mongoose.Schema({
    patientId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    examDate: { 
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    },
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OpticalShop"
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
});

const EyeTest = mongoose.model("EyeTest", eyeTestSchema);

export default EyeTest;
