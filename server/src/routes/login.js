const Router = require('koa-router');
const router = new Router();
const Member = require("../models/member");
const client = require('../client.js');

const RateLimit = require('koa2-ratelimit').RateLimit;
const limitMiddleware = RateLimit.middleware({
    interval: 15*60*1000, // 15 minutes
    max: 100,
});

router.post('/login', async ctx => {
    logger.info('[route] : post login')
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
 
    //    client.on('connect', function () {
    //      client.subscribe('presence', function (err) {
    //        if (!err) {
    //          client.publish('presence', 'Hello mqtt')
    //        }
    //      })
    //    })
    //    client.on('message', function (topic, message) {
    //      // message is Buffer
    //      console.log(message.toString())
    //      client.end()
    //    })

    try {
        let info = await Member.findOne({
            "email": {"$eq": email},
            "password": {"$eq": password}
        });
        if(info) {
            ctx.session.info = info;
            ctx.body = "success";
        } else {
            ctx.body = "fail";
        }
    } catch(error) {
        logger.error(error);
    }
});

router.post('/register', async ctx => {
    let name = ctx.request.body.name;
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;

    try {
        // 동일한 이메일로 등록된 것이 있는지 확인
        let vaild = await Member.find({
            "email": {"$eq": email}
        });
        if(vaild.length) {
            ctx.body = "fail"
        } else {
            let info = new Member({
                "email": email,
                "password": password
            });
            let result = await Member.create(info);
            if(result) { 
                ctx.body = "success";
            }
        }

    } catch(error)  {
        logger.error(error);
    }
})

router.get('/', limitMiddleware, async ctx => {
    logger.info('[route]: home');
    var session = ctx.session;

    if(ctx.session.info) {
        try {
            let info = await Member.findOne({
                'email': {"$eq": "admin@admin"}
            });
            if(info) {
                ctx.body = {
                    info: info,
                    result: true ,
                }
          } else {
               ctx.body = {
                    result: false 
                } 
            }
        } catch(error) {
            logger.error(error);
        }
    } else {
        ctx.body = session 
    }
})


module.exports = router;

