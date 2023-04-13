const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseController');

router.post('/create', courseController.addCourse);
router.delete('/delete/:id', courseController.deleteCourse);
router.put('/update/price/:id',courseController.updateCoursePrice);
router.put('/update/details/:id',courseController.updateCourseDetails);
router.put('/update/subject/:id',courseController.updateCourseSubject);
router.get('/all',courseController.getAllCourses);
router.get('/getCourse/:id',courseController.getCourse);
router.get('/getStudentCourses/:st_id',courseController.getCoursesByStudentId);

module.exports = router;