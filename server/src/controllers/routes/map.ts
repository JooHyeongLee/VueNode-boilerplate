import { Router, Request, Response } from "express";
import request from 'request';
import { logger } from "../../lib/logger";
import { config } from "../../lib/config";
import { Corona } from "../models/corona";
import { csvService } from "../services/csv";

class Map {
    // 홈 화면
    init = {
        path: "/api/map/init",
        method: "get",
        handler: [
            async ( req: Request, res: Response) => {
                logger.info(`[route] /api/map/init `);
                await csvService.readCsv((csvData: any)=>{
                    res.status(200).send(csvData);
                })
            }
        ]
    }
}

export const map = new Map();
