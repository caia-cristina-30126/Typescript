const add = (a: number, b: number) : number => { // type annotation for every single argument  ( a and b)
   //and also for what the function will return 
  return a + b; 
}
// console.log(" The sum is: " + add(5,3));

function divide( a: number, b: number): number {
  return a/b;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if(!message) {
    throw new Error(message);
  }
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

/*const logWeather = (forecast: { date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}
logWeather(forecast);
*/

// or we can do it directly, without creating a function 'forecast':
const logWeather2 = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};

