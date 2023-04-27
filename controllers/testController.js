const testService = require('../services/testService');

function renderIndexPage(req, res) {
  console.log(req.session);
  res.render('index');
}

function renderSignupPage(req, res) {
  res.render('signup');
}

function renderLoginPage(req, res) {
  res.render('login');
}

  module.exports = {
    renderIndexPage,
    renderSignupPage,
    renderLoginPage,
  };