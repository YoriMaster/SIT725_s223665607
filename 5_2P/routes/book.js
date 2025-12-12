const express = require('express');
const router = express.Router();

const Controllers = require('../controllers');

router.get('/', Controllers.bookController.getAllBook);
router.get('/:id', Controllers.bookController.getBookById);


module.exports = router;