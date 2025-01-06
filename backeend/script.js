const express = require('express');
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const app = express();
try{
const  connectiondetail =mongoose.connect("mongodb://localhost:27017/rehbarstore")
if(!connectiondetail){
  console.log("error ehile connecting to the server")
}else{
  console.log("connection established successfully")
}
}catch(err){
  console.log("500 server error  " + err)
}


app.use(express.urlencoded({extended:true}))
app.use(express.json());
const cors = require('cors');
app.use("/", productRoutes);
app.post("/addproduct/topwear",productRoutes);
app.post("/addproduct/book",productRoutes);
app.get("/book/:id",productRoutes);


const PORT = 3200;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
