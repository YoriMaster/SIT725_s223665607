const bookService = require('../services/bookService');

exports.getAllBook = async (_req, res, next) => {

    try {
        const items = await bookService.getAllBook();
        res.status(200).json({
            statusCode: 200,
            data: items,
            message: 'Book menu retrieved using service'
        });

    } catch (err) {
        next(err);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    } catch (err) {
        next(err);
    }
};