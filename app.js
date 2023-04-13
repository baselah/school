const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const subjectRoutes = require('./routes/subject');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const managerRoutes = require('./routes/manager');
const courseRoutes = require('./routes/course');
const testRoutes = require('./routes/test');
const feedbackRoutes = require('./routes/feedback');
const classRoutes = require('./routes/class');
const billRoutes = require('./routes/bill');
const lessonRoutes = require('./routes/lesson');
const scheduleRoutes = require('./routes/schedule');
const notificationRoutes = require('./routes/notification');
const noteRoutes = require('./routes/note');

app.use('/Institute/subject', subjectRoutes);
app.use('/Institute/student', studentRoutes);
app.use('/Institute/teacher', teacherRoutes);
app.use('/Institute/manager', managerRoutes);
app.use('/Institute/course', courseRoutes);
app.use('/Institute/test', testRoutes);
app.use('/Institute/feedback', feedbackRoutes);
app.use('/Institute/class', classRoutes);
app.use('/Institute/bill', billRoutes);
app.use('/Institute/lesson', lessonRoutes);
app.use('/Institute/schedule', scheduleRoutes);
app.use('/Institute/notification', notificationRoutes);
app.use('/Institute/note', noteRoutes);


const student = require('./models/Student');
const course = require('./models/Course');
const StudentCourse = require('./models/StudentCourse');

const classs = require('./models/Class');
const StudentClass = require('./models/StudentClass');
const test = require('./models/Test');
const TestClass = require('./models/TestClass');
const StudentTest = require('./models/StudentTest');
const Feedback = require('./models/Feedback');
const Subject = require('./models/Subject');
const Lesson = require('./models/Lesson');
const Schedule = require('./models/Schedule');
const Notification = require('./models/Notification');

const StudentLesson = require('./models/StudentLesson');
const ClassLesson = require('./models/ClassLesson');
const NotificationStudent = require('./models/NotificationStudent');

student.belongsToMany(course, { as: 'courses', foreignKey: 'st_id', through: StudentCourse });
course.belongsToMany(student, { as: 'students', foreignKey: 'co_id', through: StudentCourse });

student.belongsToMany(classs, { as: 'classes', foreignKey: 'st_id', through: StudentClass });
classs.belongsToMany(student, { as: 'students', foreignKey: 'cl_id', through: StudentClass });

test.belongsToMany(classs, { as: 'classes', foreignKey: 'test_id', through: TestClass });
classs.belongsToMany(test, { as: 'tests', foreignKey: 'cl_id', through: TestClass });

test.belongsToMany(student, { as: 'students', foreignKey: 'test_id', through: StudentTest });
student.belongsToMany(test, { as: 'tests', foreignKey: 'st_id', through: StudentTest });

Lesson.belongsToMany(student, { as: 'students', foreignKey: 'l_id', through: StudentLesson });
student.belongsToMany(Lesson, { as: 'lessons', foreignKey: 'st_id', through: StudentLesson });

Lesson.belongsToMany(classs, { as: 'classes', foreignKey: 'l_id', through: ClassLesson });
classs.belongsToMany(Lesson, { as: 'lessons', foreignKey: 'cl_id', through: ClassLesson });

student.belongsToMany(Notification, { as: 'notifications', foreignKey: 'st_id', through: NotificationStudent });
Notification.belongsToMany(student, { as: 'students', foreignKey: 'no_id', through: NotificationStudent });



Feedback.belongsTo(student);
student.hasMany(Feedback);

Subject.belongsTo(classs);
classs.hasMany(Subject);

classs.hasMany(Schedule,{foreignKey:'cl_id'});
Schedule.belongsTo(classs,{foreignKey:'cl_id'});


module.exports = app;