const express = require('express');
const router = express.Router();
const managerController = require('../controllers/ManagerController');


router.post('/create', managerController.addManager);
router.post('/login', managerController.loginManager);
router.delete('/delete/:id', managerController.deleteManager);
router.put('/update/username/:id', managerController.updateManagerName);
router.put('/update/password/:id', managerController.updateManagerPassword);
router.put('/update/admin/:id', managerController.updateManagerAdmin);
router.get('/all', managerController.getAllManager);


module.exports = router;