const express = require("express");
const productRouter = require("./routes/productRoute");
const app = express();

//middleware
app.use(express.json());
app.use("/products", productRouter);

app.listen(4000, "localhost", () => {
  console.log("Server listening at port 4000");
});
