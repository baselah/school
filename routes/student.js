const express = require('express');
const router = express.Router();
const studentController = require('../controllers/StudentController');

router.post('/create', studentController.addStudent);
router.post('/login', studentController.loginStudent);
router.delete('/delete/:id', studentController.deleteStudent);
router.put('/update/name/:id', studentController.updateStudentName);
router.put('/update/password/:id', studentController.updateStudentPassword);
router.put('/update/phone/:id', studentController.updateStudentPhone);
router.get('/all',studentController.getAllStudent);
router.get('/getStudent/:id',studentController.getStudent);
router.get('/getCourseStudents/:id',studentController.getStudentsByCourseId);
router.get('/getClassStudents/:id',studentController.getStudentsByClassId);
router.post('/addstudenttocourse',studentController.addStudentsToCourse);
router.post('/addstudenttoclass',studentController.addStudentsToClass);
router.post('/addstudentstolesson',studentController.addStudentsToLesson);


module.exports = router;