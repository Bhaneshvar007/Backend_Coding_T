import mongoose from "mongoose";


const ToDoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        tyep: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    subToDo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubToDo'
    }
}, { timestamps: true });

export const ToDo = mongoose.model('ToDo', ToDoSchema);