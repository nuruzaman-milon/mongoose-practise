import { User } from "./userModel";

export const userService = async() =>{
    const user = new User({
        name:{
            firstName:"Aysha",
            lastName:"Milon",
        },
        age: "27",
        gender:"male",
        email: "njmilon213@gmail.com",
        phone:"0000333"
    });
    await user.save();
    return user; 
}