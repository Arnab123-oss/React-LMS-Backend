import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import ErrorHandler from "../utils/errorHandler.js";



export const getAllCourses = catchAsyncError(async (req, res, next) => {

  // res.send("welcome");
  const courses = await Course.find();
  res.status(200).json({
    success: true,
    courses,
  });

});

export const createcCourse = catchAsyncError(async (req, res, next) => {

  const { title, decription, category, createdBy } = req.body;

  if (!title || !decription || !category || !createdBy) 
  return next(new ErrorHandler("Please add all fields", 400));


  // const file = req.file;


  await Course.create({
    title,
    decription,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp"
    }
  });
  res.status(201).json({
    success: true,
    message: "Course created successfully . You can Add lectures now .",
  });

});
