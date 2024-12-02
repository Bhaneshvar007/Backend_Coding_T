import mongoose from "mongoose";

const subToDoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false           
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const SubToDo = mongoose.model('SubToDo', subToDoSchema);