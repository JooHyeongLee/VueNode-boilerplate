// koa module declare 
const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
var session = require('./utils/session');
var RedisStore = require('koa-redis');
const mongodb_conn_module = require('./mongodbConnModule');

const app = new Koa();
const routes = require('./routes');

const RateLimit = require('koa2-ratelimit').RateLimit;
const Stores = require('koa2-ratelimit').Stores;

// global 변수
global.logger = require('./utils/logger.js');
global.config = require(__dirname + "/../../config/config.json");
global.db = mongodb_conn_module.connect();

RateLimit.defaultOptions({
    message: 'Get out.',
    store: new Stores.Redis({
        host: '127.0.0.1',
        port: '6379',
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
app.use(koaBody({
    formidable:{
        uploadDir: './uploads',
        keepExtensions: true
    },
    multipart: true,
    urlencoded: true
}));
app.use(routes())

app.listen(process.env.PORT || 8081, ()=>{
    logger.info(8081 + " port listen!");
});

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
