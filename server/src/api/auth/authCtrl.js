const Member = require('../../models/member.js');

exports.home = async(ctx) => {
    logger.info('[route]: home');
    console.log(ctx.session) 
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
        ctx.body = "test";
    }
}

exports.login = async(ctx) => {
    logger.info('[route] : post login');
    let email = ctx.request.body.email;
    let password = ctx.request.body.password;
 
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
}
