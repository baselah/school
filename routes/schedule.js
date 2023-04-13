const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/ScheduleController');


router.post('/create',scheduleController.addSchedule);
router.post('/addday',scheduleController.addDayToSchedule);
router.get('/getschedules/:cl_id',scheduleController.getSchedulesClass);
router.put('/updatestime/:sch_id',scheduleController.updateStime);
router.put('/updateetime/:sch_id',scheduleController.updateEtime);
router.put('/updateperiodcheck/:sch_id',scheduleController.updatePeriodCheck);
router.delete('/deleteday/:sch_id',scheduleController.deleteDayFromSchedule);



module.exports = router;