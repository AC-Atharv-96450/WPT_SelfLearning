const cors = require("cors");
const express = require("express");
const studentRouter = require("./Routes/studentRouter");
const courseRouter = require("./Routes/courseRouter");

//creating the express object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/course", courseRouter);
app.use("/student", studentRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is listening from 4000");
});
