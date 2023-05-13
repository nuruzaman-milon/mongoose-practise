import { IProduct } from "./productInterface";
import { ProductModel } from "./productModel"

export const productService = async(payload:IProduct):Promise<IProduct> =>{
    const product = new ProductModel(payload);
    await product.save();
    return product;
}

export const getAllProductService = async()=>{
    const allProducts = ProductModel.find()
    return allProducts;
}