const bookItems = require('../models/bookModel');

async function getAllBook () {
    return bookItems.find({}).lean({getters: true});
};

async function getBookById(id) {
    return bookItems.findOne({ id }).lean({ getters: true });
}

module.exports = {
    getAllBook,
    getBookById
};