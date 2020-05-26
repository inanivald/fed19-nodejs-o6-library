const express = require('express');
const router = express.Router();
const { index, show } = require('../controllers/author_controller');


router.get('/', index)

/* GET /:authorId */
router.get('/:authorId', show);

module.exports = router;