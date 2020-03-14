import csv from 'csv-parser';
import fs from 'fs';
import path from 'path'

class Csv {
    csvData: any = [];
    result: any = [];

    constructor() {
        this.readCsv();
    }

    async readCsv(): Promise<any>{
        fs.createReadStream(path.join(__dirname + '/../../../data/20200314.csv'))
        .pipe(csv())
        .on('data', (data)=> this.csvData.push(data))
        .on('end', ()=>{
            this.csvData.map((v: any)=>{
                this.result.push({
                    country: v.country,
                    content1: v.content1,
                    content2: v.content2,
                    content3: v.content3
                })
            })
        })
    }
}

export const csvService = new Csv();