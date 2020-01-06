// koa module declare 
const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
//const logger = require('koa-logger')

const app = new Koa()
const router = new Router();
const routes = require('./routes');

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
//app.use(logger());
app.use(routes());

const mongodb_conn_module = require('./mongodbConnModule');
global.db = mongodb_conn_module.connect();
global.logger = require('./utils/logger.js') 

app.listen(process.env.PORT || 8081)
