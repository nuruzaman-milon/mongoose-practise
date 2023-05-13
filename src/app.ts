import express, { Application } from "express";
import cors from 'cors';
import userRouter from "../app/modules/user/userRoute";
import productRouter from "../app/modules/product/productRoute";

const app : Application = express()


//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router
app.use('/api/v1/user', userRouter);

app.use('/api/v1/product', productRouter);
// app.use('/api/v1/product', productRouter);

export default app;