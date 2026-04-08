const express = require("express");
const {
  getStudent,
  postStudent,
  putStudent,
  deleteStudent,
} = require("../controllers/studentControllers");

const studentRouter = express.Router();

studentRouter.get("/", getStudent);

studentRouter.post("/", postStudent);

studentRouter.put("/", putStudent);

studentRouter.delete("/:student_id", deleteStudent);

module.exports = studentRouter;
