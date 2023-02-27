import express from "express";
import { config } from "dotenv";
import ErrorMiddlewar from "./middlewares/Error.js";
config({
    path: "./config/config.env"
})
const app = express();

//Using Middlewares

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));




// Importing & Usinig Routes
import course from "./routes/courseRoutes.js"

app.use("/api/v1", course)

export default app

app.use(ErrorMiddlewar);