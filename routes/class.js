const express = require('express');
const router = express.Router();
const classController = require('../controllers/ClassController');


router.post('/create', classController.addClass);


module.exports = router;