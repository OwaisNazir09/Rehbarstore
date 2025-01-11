require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');  
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const app = express();




try {
  const connectiondetail = mongoose.connect("");
  if (!connectiondetail) {
    console.log("Error while connecting to the server");
  } else {
    console.log("Connection established successfully");
  }
} catch (err) {
  console.log("500 server error: " + err);
}



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./uploads/books")))
//====================================================================================================



app.get("/tshirts", productRoutes);
app.get('/book',productRoutes);
app.post("/addproduct/topwear", productRoutes);
app.post("/addproduct/book", productRoutes);
app.get("/book/:id", productRoutes);



const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
