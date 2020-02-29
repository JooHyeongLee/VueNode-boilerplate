import { auth } from "../../config/auth";
import * as nodemailer from 'nodemailer';
import { MailParser } from "mailparser";
import Imap from "imap";
import { logger } from "../../utils/logger";

class Mail {
    transporter: any
    imap: any

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: auth.GMAIL.ID,
                pass: auth.GMAIL.PASSWORD
            }
        })

        this.imap = new Imap({
            user: auth.GMAIL.ID,
            password: auth.GMAIL.PASSWORD,
            host: 'imap.gmail.com',
            port: 993,
            tls: true
        });

        this.imap.once('ready', async ()=>{
            let box = await this.imap.openBox('INBOX', true);
            console.log(box);
        })

        this.imap.once('error', function(err: any) {
            console.log(err);
        });
          
        this.imap.once('end', function() {
            console.log('Connection ended');
        });

        this.imap.connect();
    }
}

export const mailService = new Mail();
