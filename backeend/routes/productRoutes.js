const express = require('express')
const router = express.Router();
const Topwear = require('../model/topWaer')
const Book = require('../model/books')
const upload = require('../middlewares/multer');

//======================================== these controllers are only for product releated======================== 
router.get('/',async (req,res)=>{
    try{
        
const Topwearproducts = await Topwear.find().limit(3)
if(!Topwearproducts){
    return res.status(404).semd('Not found')
}else{
    return res.status(200).json(Topwearproducts)
}
    }catch(err){
        return res.status(500).send("server eoor , unavle to find data")
    }
})

// Add a product to the database
router.post('/addproduct/topwear', async (req, res) => {
    const { 
        name, 
        description, 
        category, 
        sizeAvailable, 
        price, 
        discount, 
        rating, 
        colorsAvailable, 
        stockAvailable, 
        trend, 
        releaseDate 
    } = req.body;

    if (!name || !description || !category || !sizeAvailable || !price || !discount || !rating || !colorsAvailable || !stockAvailable || !trend || !releaseDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        const isDataAdded = await Topwear.create({
            name,
            description,
            category,
            sizeAvailable,
            price,
            discount,
            rating,
            colorsAvailable,
            stockAvailable,
            trend,
            releaseDate,
            image: imagePath 
        });

        if (!isDataAdded) {
            return res.status(500).json({
                success: false,
                message: "Failed to add product",
            });
        }

        return res.status(201).json({
            success: true,
            message: "Entry created successfully",
            data: isDataAdded
        });

    } catch (err) {
        console.error("Error during product creation:", err);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
});

//===========================================//this is for books===================================//
router.post('/addproduct/book',upload.single('image'), async (req, res) => {
    const { 
        name, 
        description, 
        category, 
        author, 
        publisher, 
        price, 
        discount, 
        rating, 
        stockAvailable, 
        releaseDate, 
        pages, 
        language, 
        isbn 
    } = req.body;


    const imagePath = req.file ? req.file.path : null;

    try {
        const savedBookDetail = await Book.create({
            name, 
            description, 
            category, 
            author, 
            publisher, 
            price, 
            discount, 
            rating, 
            stockAvailable, 
            releaseDate, 
            pages, 
            language, 
            isbn,
            image: imagePath  
        });

        if (!savedBookDetail) {
            return res.status(500).json({ message: 'Error saving the book' });
        }

        return res.status(201).json({ message: 'Book added successfully', book: savedBookDetail });

    } catch (error) {
        console.error('Error adding book:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});
//========================this route id gor finding a book using their isbn number===============================//
router.get('/book/:id', async (req, res) => {
    const bookfindid = req.params.id;
    try {
      const book = await Book.find({ isbn: bookfindid });
      if (book.length > 0) {
        res.status(200).json(book);
      } else {
        res.status(404).send("Book not found");
      }
    } catch (error) {
      console.error("Error fetching book:", error);
      res.status(500).send("Error fetching book details");
    }
  });
  

module.exports = router;

module.exports= router