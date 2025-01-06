const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, 
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100, 
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5, 
    },
    stockAvailable: {
        type: Number,
        min: 0,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
        min: 1, 
    },
    language: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true, 
    },
    image: {
        type: String,  
        required: false,  
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
