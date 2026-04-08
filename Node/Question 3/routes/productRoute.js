const express = require("express");
const productsData = require("../products");
// creating the router
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send(productsData);
});

productRouter.post("/", (req, res) => {
  const { id, name, price } = req.body;
  try {
    const data = {
      id: id,
      name: name,
      price: price,
    };
    productsData.push(data);
    res.send("Data inserted sucessfully");
  } catch (error) {
    res.send("Error in inserting data");
  }
});

productRouter.put("/", (req, res) => {
  const { id, name, price } = req.body;
  let index;
  try {
    for (index = 0; index < productsData.length; index++) {
      if (id == productsData[index].id) {
        break;
      }
    }
    productsData[index] = {
      id: id,
      name: name,
      price: price,
    };
    res.send("Data updated successfully");
  } catch (error) {
    console.log("Error in updating the record" + error);
  }
});

productRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  let index;
  try {
    for (index = 0; index < productsData.length; index++) {
      if (id == productsData[index].id) {
        break;
      }
    }
    productsData.splice(index, 1);
    res.send("Record successfully deleted");
  } catch (error) {
    res.send("Error in deleteing the record" + error);
  }
});

module.exports = productRouter;
