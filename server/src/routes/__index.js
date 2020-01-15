const Router = require('koa-router')
const combineRouters = require('koa-combine-routers')
 
const login = require('./login.js'); 
const mail = require('./mail.js');

const router = combineRouters(
    login,
    mail
)

module.exports = router;
