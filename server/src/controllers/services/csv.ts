import csv from 'csv-parser';
import fs from 'fs';
import path from 'path'

class Csv {
    csvData: any = [];
    result: any = [];

    constructor() {
    }

    async readCsv(callback: any) : Promise<any>{
        await fs.createReadStream(path.join(__dirname + '/../../../data/20200314.csv'))
        .pipe(csv())
        .on('data', async(data)=> {
            this.csvData.push(data);
        })
        .on('end', ()=>{
            callback(this.csvData);
            this.csvData = [];
        })
    }

    removeEmpty(item: any) {
        this.result.map((obj: any)=>{
            Object.keys(obj).forEach(key=>{
                // (obj[key] && typeof obj[key] === 'object') && new Csv().removeEmpty(obj[key]) ||
                (obj[key] === '' || obj[key] === null) && delete obj[key]
            })
        })
    };
}

export const csvService = new Csv();