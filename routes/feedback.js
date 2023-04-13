const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/FeedbackController');

router.post('/addfeedback', feedbackController.addFeedback);
router.delete('/delete/:id', feedbackController.deleteFeedback);


module.exports = router;