import { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";
import { auth } from "../../config/auth";
import * as nodemailer from 'nodemailer';
import { MailParser } from "mailparser";
import Imap from "imap";
import { mailService } from "../controllers/mail";



const mail = {
    mail: {
        path: "/mail",
        method: "get",
        handler: [
            async ({body, session}: Request, res: Response) => {
                logger.info(`[route]: /mail`);
                try {
                    let result = true;
                    let mail = await mailService.getMail();
                    console.log(mail);
                    if(result) {
                        session!.isLogin = true;
                        res.status(200).send("success");
                    }
                    else {
                        res.status(404).send("fail");
                    }
                } catch(error) {
                    logger.error(error);
                }
            }
        ]
    }
}

export {mail}
