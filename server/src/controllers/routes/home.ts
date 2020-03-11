import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";
import { mongo } from "../../lib/mongo";
import {sessionModel} from '../models/session';
import { Corona } from "../models/corona";
import { csvService } from "../services/csv";

class Home {
    // 홈 화면
    home = {
        path: "/",
        method: "get",
        handler: [
            async ( req: Request, res: Response) => {
                logger.info(`[route] / `);
                /* new Corona().model.create({
                    seq: 1,
                    country: 'sample',
                    action: 'sample action'
                }) */
                await csvService.readCsv();
                res.status(200).send(1);
            }
        ]
    }
}

export const home = new Home();
