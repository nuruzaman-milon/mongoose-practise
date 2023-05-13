import express from "express";
import { allProductController, productController } from "./productController";
const router = express.Router();

router.post("/create-product",productController)
router.get("/all-products",allProductController)
export default router;
