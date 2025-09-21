import express from "express";
import {getAllAction} from "./controller.js";

const app = express();

app.use(express.json());

app.get('/movie', getAllAction);

app.listen(8181, () => console.log('Started app on port 8181'))


