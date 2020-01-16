const Router = require('koa-router');

const login = require('./login.js');
const mail = require('./mail.js');

const router = new Router();

router.use('/', login.routes());

module.exports = router;

