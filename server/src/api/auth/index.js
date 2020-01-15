const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./authCtrl');

auth.get('/', authCtrl.home);
auth.post('/login', authCtrl.login);

module.exports = auth;
