import express from "express";
import { getAllCourses, createcCourse } from "../controllers/courseControllers.js";

const router = express.Router();


router.route("/courses").get(getAllCourses);
router.route("/createcourse").post(createcCourse);

export default router;