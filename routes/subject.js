const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/SubjectControllers');

router.post('/create', subjectController.addSubject);
router.delete('/delete/:id', subjectController.deleteSubject);
router.put('/update/name/:id', subjectController.updateSubjectName);
router.put('/update/grade/:id', subjectController.updateSubjectGrade);
router.put('/update/details/:id', subjectController.updateSubjectDetails);
router.get('/all',subjectController.getAllSubject);

module.exports = router;