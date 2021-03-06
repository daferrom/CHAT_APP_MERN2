const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema(
    {
    username:{
        type:String,
        required: true,
        min:3,
        max: 20,
        unique:true
    },
    email:{
        type:String,
        required: true,
        max: 50,
        unique: true
    },
    password:{
        type:String,
        required: true,
        min: 6
    },
    name: {
        type :String,
        required: true,
        max: 60,
    },
    userType:{
        type :String,
        required: true,
        max: 30,
    },
    profilePicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);