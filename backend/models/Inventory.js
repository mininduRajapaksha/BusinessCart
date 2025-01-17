const mongoose= require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    UserId:{
        type: Number,
        unique: true,
        required: true
    },

    FirstName:{
        type: String,
        required: true
    },

    LastName:{
        type: String,
        required: true
    },

    Email:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    }
})

const User = mongoose.model("users", userSchema);
module.exports = User;