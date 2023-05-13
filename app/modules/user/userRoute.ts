import express from "express";
import { userController } from "./userController";
const router = express.Router();

router.get("/",userController)
export default router;