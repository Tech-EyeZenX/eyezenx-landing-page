import mongoose from "mongoose";

const instructionSchema = new mongoose.Schema({
    reportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report"
    },
    instruction: {
        type: String
    },
    generatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const Instruction = mongoose.model("Instruction", instructionSchema);

export default Instruction;
