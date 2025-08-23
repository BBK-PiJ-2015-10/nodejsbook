import express from 'express';
import {router as userRouter} from "./user/index.js";
import {getChannel, registerHandler} from "./connect.js";

const channel = await getChannel();
registerHandler(channel);

const app = express();

app.use(express.json());
app.use('/user', userRouter);

app.listen(8080, () => 'Started app on port 8080')
console.log("This is a test")