import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EyeTest"
    },
    result: {
        type: String,
        enum: ["normal", "abnormal"],
        default: "normal"
    },
    generatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    analyzedByDoctorId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    resultData: { 
        type: String,
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }
}, { timestamps: true });

const TestResult = mongoose.model("TestResult", testResultSchema);

export default TestResult;
