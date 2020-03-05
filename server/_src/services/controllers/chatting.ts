import { logger } from "../lib/logger";
import { chatting } from "../models/chatting";
import { Request, Response, response } from "express";
import { mqtt, Mqtt } from "../lib/mqtt";
import { mosca } from "../lib/mosca";
import { db } from "../lib/db";

class Chatting {
    // 채팅방 생성
    create =  async (req: Request) => {
        try {
            let result = await chatting.create({
                title: req.body.title,
                types: req.body.types,
                password: req.body.password,
                count: 0,
                channel: req.body.channel,
                useYN: 'Y'
            });
        } catch(error) {
          logger.error(error);
        }
    }
    // 채팅방 구독
    join = async (req: Request) => {
        // await new Mqtt().subscribe(req.body.id);
        logger.info(`${req.body.id} topic join!`);
        await mqtt.subscribe(req.body.id);        
    }
    // 메세지 발행
    submit = async(req: Request, res: Response) => {
        // Base64 decode sample code
        let data = Buffer.from('MTIzNA==', 'base64').toString('ascii');
        // mqtt client publish
        await mqtt.publish(req.body.topic, req.body.chat);
        res.send(req.body.chat);
    }
}

export const chattingService = new Chatting();

