const mongoose = require('mongoose');

const dryFruitsSchema = mongoose.Schema({
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
    weightAvailable: {
        type: [String],  // Different weight options for the dry fruits
        required: true,
    },
    pricePerKg: {
        type: Number,
        required: true,
        min: 0,  // Price per kilogram
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100,  // Discount percentage
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,  // Rating out of 5
    },
    colorsAvailable: {
        type: [String],  // Colors of dry fruits (e.g., cashews, almonds)
        required: true,
    },
    stockAvailable: {
        type: Number,
        min: 0,  // Quantity available in stock
        required: true,
    },
    freshnessLevel: {
        type: Number,
        required: true,  // Freshness rating (could be 1-10 scale)
    },
    originCountry: {
        type: String,
        required: true,  // Country where the dry fruit is sourced from
    },
    image: {
        type: String,  // URL or path to the image of the dry fruit
        required: false,  // Optional field
    },
});

const DryFruits = mongoose.model('DryFruits', dryFruitsSchema);

module.exports = DryFruits;
