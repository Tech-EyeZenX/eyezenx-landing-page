import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    generatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    verified: { 
        type: Boolean,
        default: false,
    },
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EyeTest",
    },
    verifiedAt: { 
        type: Date,
        default: Date.now()
    },
    sentToPatient: { 
        type: Boolean,
        default: false
    },
    sentAt: { 
        type: Date,
        default: Date.now()
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
