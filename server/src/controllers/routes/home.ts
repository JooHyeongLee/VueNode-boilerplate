import { Router, Request, Response } from "express";
import { logger } from "../../lib/logger";
import { csvService } from "../services/csv";

class Home {
    // 홈 화면
    home = {
        path: "/",
        method: "get",
        handler: [
            async ( req: Request, res: Response) => {
                logger.info(`[route] / `);
                await csvService.readCsv((csvData: any)=>{
                    res.status(200).send(csvData);
                })
                // await csvService.removeEmpty(csvService);
            }
        ]
    }
}

export const home = new Home();
