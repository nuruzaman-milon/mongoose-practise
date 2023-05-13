import { Schema, model } from "mongoose";
import { IProduct } from "./productInterface";

const productSchema = new Schema<IProduct>({
    title:{
        main_title:{type:String, required:true},
        sub_title:{type:String}
    },
    price:{type:Number, required:true},
    desc:{type:String, required:true},
    isOffer:{type:Boolean, required:true}
})

export const ProductModel = model<IProduct>('ProductModel',productSchema)