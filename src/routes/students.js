const express = require('express')    
const router = express.Router()

const studentController = require('../app/controllers/StudentController');

router.get('/create', studentController.create);
router.post('/store', studentController.store);
router.get('/:id/edit', studentController.edit);
router.put('/:id', studentController.update);
router.patch('/:id/restore', studentController.restore);
router.delete('/:id', studentController.destroy);
router.delete('/:id/force', studentController.forceDestroy);
router.get('/:slug', studentController.show);

module.exports = router;    
