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
                await csvService.readCsv();
                res.status(200).send(csvService.result);
            }
        ]
    }
}

export const home = new Home();
