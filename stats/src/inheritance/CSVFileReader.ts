import fs from 'fs';


export abstract class CSVFileREADER<TypeOfData> {  // TypeOfData = T; it can be anything we want
  data: TypeOfData[] = []; 

  constructor( public filename: string) {}

  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs.readFileSync(this.filename , {
      encoding: 'utf-8' // to return a string representing the content of the .csv file, instead a buffer
    }).split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    })
    .map(this.mapRow);

  }

  
}