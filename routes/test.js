const express = require('express');
const router = express.Router();
const testController = require('../controllers/TestController');


router.post('/linktestClass',testController.linkTestClass);
router.post('/addtest',testController.addTest);
router.post('/addmark',testController.addMark);
router.put('/updatemark',testController.updateMark);







module.exports = router;