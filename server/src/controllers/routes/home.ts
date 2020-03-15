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
                await csvService.readCsv();
                console.log(csvService.result);
                // await csvService.removeEmpty(csvService.result);
                res.status(200).send(csvService.result);
            }
        ]
    }
}

export const home = new Home();
