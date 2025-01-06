const multer = require('multer');
const path = require('path');

const bookstoreimages = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/books'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix);
    }
});

const topwearimages = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/topwear')); // Fixed typo
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix);
    }
});

const books_images = multer({ storage: bookstoreimages });
const topwear_images = multer({ storage: topwearimages });

module.exports = {
    books_images,
    topwear_images
};
