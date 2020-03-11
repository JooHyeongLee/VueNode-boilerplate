import csv from 'csv-parser';
import fs from 'fs';
import path from 'path'

class Csv {
    results: any = [];
    async readCsv() {
        fs.createReadStream(path.join(__dirname + '/../../../data/20200311.csv'))
        .pipe(csv())
        .on('data', (data)=> this.results.push(data))
        .on('end', ()=>{
            console.log(this.results);
        })
    }
}

export const csvService = new Csv();