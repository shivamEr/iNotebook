const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    // id: { type: String, required: true }, It workes like a foregion key
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type : String,
        required: true
    },
    description:{
        type:String,
        required : true,
        unique : true
    },
    tag:{
        type: String,
        default : 'General'
    },
    date:{
        type : Date,
        default : Date.now()
    }

});

module.exports = mongoose.model('note', NotesSchema);