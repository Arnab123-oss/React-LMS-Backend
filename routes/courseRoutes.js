import express from "express";
import {
  getAllCourses,
  createCourse,
} from "../controllers/courseControllers.js";

const router = express.Router();

//Get All courses without lectures
router.route("/courses").get(getAllCourses);

//create new course - only admin
router.route("/createcourse").post(createCourse);

//Add lecture , Delete Course , Get Course Details


//Delete lecture

export default router;
