// koa module declare 
const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router();

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
app.use(logger());

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();
var Member = require("../models/member");

router.post('/login', async (ctx)=>{
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;

    try {
        let info = await Member.find({
            "email": {"$eq": email},
            "password": {"$eq": password}
        });
        if(info.length) {
            ctx.body = "success";
        } else {
            ctx.body = "fail";
        }
    } catch(error) {
        console.log(error);
    }
})
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 8081)
