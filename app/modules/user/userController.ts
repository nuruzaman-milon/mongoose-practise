import { NextFunction, Request, Response } from "express";
import { userService } from "./userService";

export const userController = async(req : Request, res : Response, next: NextFunction) => {
    const user = await userService();

    res.status(200).json({
        status: "success",
        data: user
    })
};