import { Schema, model } from "mongoose";
import { IUser } from "./userInterface";

const userSchema = new Schema<IUser>({
    // _id:{type:String, required:true, unique:true},
    name:{
        firstName: {type:String, required:true},
        middleName: {type:String},
        lastName:{type:String, required:true}
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String
    }
})

//creating a Model
export const User = model<IUser>('User',userSchema);