const testService = require('../services/testService');

function renderIndexPage(req, res) {
  res.render('index', {
    userid : req.session.userid
  });
  
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