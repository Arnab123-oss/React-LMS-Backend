import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieparser from "cookie-parser";

config({
  path: "./config/config.env",
});
const app = express();

//Using Middleware

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieparser());

// Importing & Using Routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
app.use("/api/v1", course);
app.use("/api/v1", user);

export default app;

app.use(ErrorMiddleware);
