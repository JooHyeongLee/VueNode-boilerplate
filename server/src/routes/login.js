const Router = require('koa-router');
const router = new Router();
const Member = require("../models/member");

router.post('/login', async ctx => {
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
});

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
        console.log(error);
    }
})


module.exports = router;

