const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.get('/signup', testController.renderSignupPage);
router.get('/login', testController.renderLoginPage);
router.get('/index', testController.renderIndexPage);

module.exports = router;