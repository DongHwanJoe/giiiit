const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/select', todoController.getList);
router.post('/insert', todoController.insert);
router.post('/delete', todoController.delete);
router.post('/update', todoController.update);
router.post('/done', todoController.done);

module.exports = router;