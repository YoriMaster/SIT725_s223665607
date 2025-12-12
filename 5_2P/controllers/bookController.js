const bookService = require('../services/bookService');

exports.getAllBook = (req, res) => {

    const items = bookService.getAllBook();

    res.json(items);

};

exports.getBookById = (req, res) => {
    const book = bookService.getBookById(req.params.id);
    if (!book) {
        return res.status(404).send("Book not found");
    }
    res.json(book);
};