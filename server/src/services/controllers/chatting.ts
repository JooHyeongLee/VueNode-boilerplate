import { logger } from "../lib/logger";
import * as db from "typeorm";
import { Chatting } from "../models/chatting";
import { Request } from "express";
import { mqtt } from "../lib/mqtt";


export const chattingController = {
    create: async (req: Request) => {
        try {
            await Chatting.create({
                title: req.body.title,
                types: req.body.types,
                password: req.body.password,
                count: 0,
                useYN: 'Y'
            });
        } catch(error) {
          logger.error(error);
        }
    },
    join: async (req: Request) => {
        logger.info(`${req.body.ip} topic join`);
        try {
            logger.info(`${req.body.id} topic join!`);
            await mqtt.subscribe(req.body.id);  
        } catch(error) {

        }
    }
};