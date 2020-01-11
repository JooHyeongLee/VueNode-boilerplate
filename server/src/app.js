// koa module declare 
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
// const session = require('koa-session');
var session = require('./utils/session');
var redisStore = require('koa-redis');
const mongodb_conn_module = require('./mongodbConnModule');

const app = new Koa();
const routes = require('./routes');


// koa-session
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: new redisStore()
}));

function post(ctx) {
    var session = ctx.session;
    session.count = session.count || 0;
    session.count++;
    session.isLogin = true;
}

function remove() {
  this.session = null;
}

global.db = mongodb_conn_module.connect();

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
app.use(routes());

global.logger = require('./utils/logger.js');

// mqtt
//const mqtt = require('./mosca.js');

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
