const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/NotificationController');


router.post('/create',notificationController.addNotification);
router.delete('/delete/:id',notificationController.deleteNotification);
router.post('/addnotificationtudent',notificationController.addNotificationToStudent);
router.get('/getnotificationstudent/:st_id',notificationController.getNotificationsStudent);
router.put('/readnotification',notificationController.updateReadNotification);



module.exports = router;