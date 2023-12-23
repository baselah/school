const express = require('express');
const router = express.Router();



const subjectRoutes = require('./subject');
const studentRoutes = require('./student');
const teacherRoutes = require('./teacher');
const managerRoutes = require('./manager');
const courseRoutes = require('./course');
const testRoutes = require('./test');
const feedbackRoutes = require('./feedback');
const classRoutes = require('./class');
const billRoutes = require('./bill');
const lessonRoutes = require('./lesson');
const scheduleRoutes = require('./schedule');
const notificationRoutes = require('./notification');
const noteRoutes = require('./note');


// Add routes to the router with the global prefix
router.use('/subject', subjectRoutes);
router.use('/student', studentRoutes);
router.use('/teacher', teacherRoutes);
router.use('/manager', managerRoutes);
router.use('/course', courseRoutes);
router.use('/test', testRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/class', classRoutes);
router.use('/bill', billRoutes);
router.use('/lesson', lessonRoutes);
router.use('/schedule', scheduleRoutes);
router.use('/notification', notificationRoutes);
router.use('/note', noteRoutes);

module.exports = router;''