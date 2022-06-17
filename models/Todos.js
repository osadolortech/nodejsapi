const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "most probide title"],
        trim: true,
        maxlength: [30, "can not be more than 30 words"]

    },
    description: {
        type: String,
        required: [true, 'must provide descripions of task'],
        trim: true,
        maxlength: [1000, ' if you have used up 1000 words then this is not a todo is actually a problem, seek help bro']

    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('todo', TodoSchema)