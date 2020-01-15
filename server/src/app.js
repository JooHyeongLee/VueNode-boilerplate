// koa module declare 
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
// const session = require('koa-session');
var session = require('./utils/session');
var RedisStore = require('koa-redis');
var memoryStroe = require('./utils/memory_store.js');
const mongodb_conn_module = require('./mongodbConnModule');
var redis = require('redis'),
    client = redis.createClient();

const app = new Koa();
const api = require('./api');
//const routes = require('./routes');

const RateLimit = require('koa2-ratelimit').RateLimit;
const Stores = require('koa2-ratelimit').Stores;

RateLimit.defaultOptions({
    message: 'Get out.',
    store: new Stores.Redis({
        host: '127.0.0.1',
        port: '6379',
        password: 'jhl1305',
        db: 1
    })
});

// koa-session
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: new RedisStore()
}));

var redis = require('redis'),
    client = redis.createClient();
// koa module middleware enroll
app.use(cors());
app.use(bodyParser());
app.use(api.routes());

// global 변수
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
