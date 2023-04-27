const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/insert', usersController.insert);
router.post('/login', usersController.login);
router.get('/getData', usersController.getData);
router.post('/update', usersController.update);
router.post('/updatePwd', usersController.updatePwd);
router.post('/delete', usersController.delete);
router.get('/getList', usersController.getList);

module.exports = router;