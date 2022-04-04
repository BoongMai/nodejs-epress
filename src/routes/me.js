const express = require('express')    
const router = express.Router()

const meController = require('../app/controllers/MeController');

router.get('/stored/student', meController.storedStudent);
router.get('/trash/student', meController.trashStudent);

module.exports = router;    
