const express = require("express");
const {
  getCourse,
  postCourse,
  putCourse,
  deleteCourse,
} = require("../controllers/courseControllers.js");

const courseRouter = express.Router();

courseRouter.get("/", getCourse);

courseRouter.post("/", postCourse);

courseRouter.put("/", putCourse);

courseRouter.delete("/:course_id", deleteCourse);

module.exports = courseRouter;
