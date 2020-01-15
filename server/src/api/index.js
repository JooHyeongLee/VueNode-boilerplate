const Router = require('koa-router');
const api = new Router();
const auth = require('./auth');

api.use(auth.routes());

api.get('/', ctx=>{
    ctx.body = "test"
})

module.exports = api;
