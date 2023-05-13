import { NextFunction, Request, Response } from "express";
import { getAllProductService, productService } from "./productService";

export const productController = async(req : Request, res : Response, next: NextFunction) => {
    const createProduct = req.body;
    const product = await productService(createProduct);
    res.status(200).json({
        status: "success",
        data: product
    })
};
export const allProductController = async(req : Request, res : Response, next: NextFunction) => {
    const product = await getAllProductService();
    res.status(200).json({
        status: "success",
        data: product
    })
};