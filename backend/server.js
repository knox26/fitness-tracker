import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/config/dbConfig.js";
import userRouter from "./src/routes/userRoute.js";



dotenv.config();


const app = express();
const port = process.env.PORT || 3000;


connectDb();
app.use(express.json());
app.use('/api/user' , userRouter);

app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})


export default app;