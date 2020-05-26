const express = require('express');
const router = express.Router();
const { index, show } = require('../controllers/book_controller');

/* GET / */
router.get('/', index);

/* GET /:bookId */
router.get('/:bookId', show);



module.exports = router;
