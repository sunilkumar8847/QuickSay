import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRouter from './routes/auth.routes.js';
import messageRouter from './routes/message.routes.js';
import userRouter from './routes/user.routes.js';

import mongodbconnect from './db/mongodbconnect.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/messages",messageRouter);
app.use("/api/users",userRouter);

app.listen(PORT, ()=>{
    mongodbconnect();
    console.log(`Server is running on the port ${PORT}`);
})