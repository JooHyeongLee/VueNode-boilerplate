// koa module declare 
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
// const session = require('koa-session');
var session = require('./utils/session');
var redisStore = require('koa-redis');
var memoryStroe = require('./utils/memory_store.js');
const mongodb_conn_module = require('./mongodbConnModule');

const app = new Koa();
const routes = require('./routes');

// koa-session
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: new redisStore()
}));

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
app.use(routes());

global.logger = require('./utils/logger.js');
global.db = mongodb_conn_module.connect();

app.listen(process.env.PORT || 8081);

// mqtt
//const mqtt = require('./mosca.js');


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
