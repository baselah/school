const express = require('express');
const router = express.Router();
const noteController = require('../controllers/NoteController');


router.post('/create',noteController.addNote);
router.delete('/delete/:id',noteController.deleteNote);



module.exports = router;