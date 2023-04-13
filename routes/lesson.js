const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/LessonController');

router.post('/create', lessonController.addLesson);
router.get('/getlesson/:id', lessonController.getLesson);
router.post('/addlessontoclass', lessonController.addLessonToClass);
router.get('/getclasslessons/:cl_id', lessonController.getLessonsClass);


module.exports = router;
