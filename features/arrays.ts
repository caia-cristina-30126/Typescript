const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [ new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro'] 
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('aString');

// Help with 'map'
carMakers.map((car:string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [];
importantDates.push('27-03-2003');
importantDates.push(new Date());
console.log(importantDates);