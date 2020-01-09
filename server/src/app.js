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

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

global.db = mongodb_conn_module.connect();

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
app.use(routes());
app.use(session(CONFIG, app));
app.use(ctx => {
  // ignore favicon
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = n + ' views';
});

global.logger = require('./utils/logger.js');

// mqtt
//const mqtt = require('./mosca.js');

//(async function initMongo() {
//    db = await mongodb_conn_module.connect();
//    app.use(session({
//        store: new MongooseStore({
//          collection: 'appSessions',
//          connection: db,
//          expires: 86400, // 1 day is the default
//          name: 'AppSession'
//        })
//      }, app));
//})();

app.listen(process.env.PORT || 8081)

//mqtt.on('clientConnected', client=>{
//    console.log('client connected', client.id);
//});
//
//mqtt.on('published', (packet, client) =>{
//  console.log('Published', packet.payload);
//});
//
//mqtt.on('ready', ()=>{
//  console.log('Mosca server is up and running');
//});
