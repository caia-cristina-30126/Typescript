import { MatchReader} from './MatchReader';
import { MatchResult } from './MatchResult';
import {CSVFileREADER} from './CsvFileReader';

const cvsFileReader = new CSVFileREADER('football.csv');
// Create an instance of MatchReader and pass in smth satisfying the 'DataReader' interface

const matchReader = new MatchReader(cvsFileReader);
matchReader.load();

// matchreader.matches


let manUnitedWins = 0;

for( let match of matchReader.matches) {
  if( match[1] ==='Man United' && match[5] === MatchResult.HomeWin){
    manUnitedWins++;
  }else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games`);