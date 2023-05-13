export interface IUser{
    name:{
        firstName:string;
        middleName?:string;
        lastName:string;
    },
    age: string;
    gender: "male" | "female";
    email: string;
    phoneNumber?: string;
}