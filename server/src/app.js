// koa module declare 
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const session = require('koa-session');
var mongoose = require('mongoose');
const MongooseStore = require("koa-session-mongoose");
const mongodb_conn_module = require('./mongodbConnModule');

const app = new Koa();
const router = new Router();
const routes = require('./routes');

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
app.use(routes());

// mqtt


global.db;
(async function initMongo() {
    db = await mongodb_conn_module.connect();
    app.use(session({
        store: new MongooseStore({
          collection: 'appSessions',
          connection: db,
          expires: 86400, // 1 day is the default
          name: 'AppSession'
        })
      }, app));
})();
global.logger = require('./utils/logger.js');
app.listen(process.env.PORT || 8081)
