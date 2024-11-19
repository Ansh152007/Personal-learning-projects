import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password : {
        type: String,
        required: [true, "Password is required!"],
        trim: true
    },
    refreshToken: {
        type: String
    }
    

},{
    timestamps:true
})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next()
    }
    this.password = bcrypt.hash(this.password,10)
    next()
})