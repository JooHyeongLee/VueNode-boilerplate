import { Router, Request, Response, request } from "express";
import { Member } from "../models/member";
import { logger } from "../../lib/logger";

class Login {
    // 로그인
    login = {
        path: "/login",
        method: "post",
        handler: [
            async ( req: Request, res: Response) => {
                logger.info(`[route]: /login`);
                let member = new Member();
                let info = await member.model.findOne({
                    email: req.body.email,
                    password: req.body.password
                });
                
            }
        ]
    }
}

export const login = new Login();
