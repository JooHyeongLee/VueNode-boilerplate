// koa module declare 
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
// const session = require('koa-session');
const MongooseStore = require("koa-session-mongoose");
var session = require('koa-generic-session');
var redisStore = require('koa-redis');
const mongodb_conn_module = require('./mongodbConnModule');

const app = new Koa();
const routes = require('./routes');

// koa-session
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: redisStore()
}));

/* app.use(()=>{
  switch (this.path) {
    case '/get':
      get.call(this);
      break;
    case '/remove':
      remove.call(this);
      break;
    }
}); */


global.db = mongodb_conn_module.connect();

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
app.use(routes());

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
