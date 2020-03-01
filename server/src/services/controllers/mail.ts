import { auth } from "../../config/auth";
import * as nodemailer from 'nodemailer';
import { MailParser } from "mailparser";
import Imap from "imap";
import { inspect } from "util";
import { logger } from "../../utils/logger";

let imap = new Imap({
    user: auth.GMAIL.ID,
    password: auth.GMAIL.PASSWORD,
    host: 'imap.gmail.com',
    port: 993,
    tls: true
});

let f: Imap.ImapFetch;

class Mail {
    transporter: any

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: auth.GMAIL.ID,
                pass: auth.GMAIL.PASSWORD
            }
        })

        /* imap.once('ready', () => {
            this.openInBox((err: Error, box: any)=> {
                if(err) throw err;
                f = imap.seq.fetch(box.messages.total, {
                    bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
                    struct: true
                });
                f.on('message', (msg, seqno)=>{
                    console.log('Message #%d', seqno);
                    let prefix = '(#' + seqno + ') ';
                    msg.on('body', (stream, info)=>{
                        let buffer = '';
                        stream.on('data', chunk=>{
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', ()=>{
                            console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
                        });
                    });
                    msg.once('attributes', (attrs)=>{
                        console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                    })
                    msg.once('end', ()=>{
                        console.log(prefix + 'Finished');
                    });
                });
                f.once('error', err=>{
                    logger.error('Fetch error: '+err);
                });
                f.once('end', ()=>{
                    console.log('Done fetching all messages!');
                    imap.end();
                })
            })
        }) */
    }

    openInBox(cb: any) {
        imap.openBox('INBOX', true, cb);
    }

    fetch() {
    }

    async getMail() {
        let subject;
        let contents;
        await imap.once('ready', () => {
            this.openInBox((err: Error, box: any)=> {
                if(err) throw err;
                f = imap.seq.fetch(box.messages.total, {
                    bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
                    struct: true
                });
                f.on('message', (msg, seqno)=>{
                    // console.log('Message #%d', seqno);
                    let prefix = '(#' + seqno + ') ';
                    msg.on('body', (stream, info)=>{
                        let buffer = '';
                        stream.on('data', chunk=>{
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', async ()=>{
                            // TODO: JSON.parse를 하기 위해선 key value가 double quote로 변경되어야 함.
                            subject = await inspect(Imap.parseHeader(buffer));
                            subject = await subject.replace(/\\n/g, "\\n")  
                            .replace(/\\'/g, "\\'")
                            .replace(/\\"/g, '\\"')
                            .replace(/\\&/g, "\\&")
                            .replace(/\\r/g, "\\r")
                            .replace(/\\t/g, "\\t")
                            .replace(/\\b/g, "\\b")
                            .replace(/\\f/g, "\\f");
                            console.log(subject);
                            // console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
                        });
                    });
                    msg.once('attributes', (attrs)=>{
                        // console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                    })
                    msg.once('end', ()=>{
                        // console.log(prefix + 'Finished');
                    });
                });
                f.once('error', err=>{
                    logger.error('Fetch error: '+err);
                });
                f.once('end', ()=>{
                    // console.log('Done fetching all messages!');
                    imap.end();
                })
            })
        })
        imap.once('error', (err: Error)=> {
            logger.error(err);
        });
          
        imap.once('end', ()=> {
            logger.info('Connection ended');
        });
        imap.connect();
    }
}

export const mailService = new Mail();
