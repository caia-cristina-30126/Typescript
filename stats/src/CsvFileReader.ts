import fs from 'fs';


export class CSVFileREADER {
  data: string[][] = []; 

  constructor( public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename , {
      encoding: 'utf-8' // to return a string representing the content of the .csv file, instead a buffer
    }).split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    });
  }
}