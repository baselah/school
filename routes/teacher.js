const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/TeacherController');


router.post('/create', teacherController.addTeacher);
router.delete('/delete/:id', teacherController.deleteTeacher);
router.put('/update/name/:id', teacherController.updateTeacherName);
router.put('/update/phone/:id', teacherController.updateTeacherPhone);
router.get('/all', teacherController.getAllTeacher);


module.exports = router;