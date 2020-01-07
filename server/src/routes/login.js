const Router = require('koa-router');
const router = new Router();
const Member = require("../models/member");

router.post('/login', async ctx => {
    logger.info('[route] : post login')
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

router.get('/', async ctx => {
    try {
        let info = await Member.find({
            'email': {"$eq": "admin@admin"}
        });
        if(info.length) {
            ctx.body = info;
        } else {
            ctx.body = "fail";
        }
    } catch(error) {
        logger.error(error);
    }
})


module.exports = router;

