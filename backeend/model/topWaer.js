const mongoose = require('mongoose');

const topwearSchema = mongoose.Schema({
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
    sizeAvailable: {
        type: [String],
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
    colorsAvailable: {
        type: [String],
        required: true,
    },
    stockAvailable: {
        type:Number,
        min :0,
        required: true,
    },
    trend: {
        type: Number,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    image: {
        type: String,  
        required: false,  
    },
});

const Topwear = mongoose.model('Topwear', topwearSchema);

module.exports = Topwear;
