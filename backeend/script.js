const express = require('express');
const mongoose = require('mongoose');
const path = require('path');  // Import path module
const productRoutes = require('./routes/productRoutes');
const app = express();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

try {
  const connectiondetail = mongoose.connect("mongodb://localhost:27017/rehbarstore");
  if (!connectiondetail) {
    console.log("Error while connecting to the server");
  } else {
    console.log("Connection established successfully");
  }
} catch (err) {
  console.log("500 server error: " + err);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use("/", productRoutes);
app.post("/addproduct/topwear", productRoutes);
app.post("/addproduct/book", productRoutes);
app.get("/book/:id", productRoutes);

const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
