const Router = require('koa-router')
const combineRouters = require('koa-combine-routers')
 
const login = require('./login.js'); 

const router = combineRouters(
    login
)

module.exports = router;
