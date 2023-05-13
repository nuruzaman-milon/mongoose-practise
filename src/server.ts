import mongoose from "mongoose";
import app from "./app";

const port : number = 5000;


/****** database connection *******/
//define a function to connect database
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Database connected successfully");
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
          })
    } catch (error) {
        console.log("failer to connect",error);
    }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//calling the function to run db server
bootstrap();




