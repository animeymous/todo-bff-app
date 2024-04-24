const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
        minlength: 1
    },

    createdDate: {
        type: Date,
        required: false
    },

    dueDate: {
        type: Date,
        required: false
    },

    priority: {
        type: Boolean,
        required: false
    },

    status: {
        type: String,
        enum: ['pending', 'done', 'doing'],
        required: true,
        default: 'pending'
    }

})
const Task = mongoose.model("taskSchema", TaskSchema)
module.exports = Task