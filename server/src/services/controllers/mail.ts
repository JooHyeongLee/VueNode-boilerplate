import { auth } from "../../config/auth";
import * as nodemailer from 'nodemailer';
import { MailParser } from "mailparser";
import Imap from "imap";

class Mail {
    constructor() {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: auth.GMAIL.ID,
                pass: auth.GMAIL.PASSWORD
            }
        })

        let imap = new Imap({
            user: auth.GMAIL.ID,
            password: auth.GMAIL.PASSWORD,
            host: 'imap.gmail.com',
            port: 993,
            tls: true
        });
    }

    async getMail() {
        return true;
    }
}

export const mailService = new Mail();