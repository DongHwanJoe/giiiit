const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/allselect', todoController.allSelect);
router.post('/select', todoController.select);
router.post('/insert', todoController.insert);
router.post('/delete', todoController.delete);
router.post('/update', todoController.update);

module.exports = router;