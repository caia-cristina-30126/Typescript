const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number] // the idea of a tuple

const pepsi: Drink =['brown', true, 40]; // array w different types; 
// Annotations to exactly specify which is the order
/*pepsi[0] = 40;  
pepsi[2] = 'brown'  //  I've swaped the elements inside the array => NOT CORRECT: bc the DATA MODEL breakes down
*/

const coffee: Drink =['black', false, 0];
const tea: Drink = ['green', coffee[1], coffee[2]];

console.log(pepsi); 
console.log(coffee); 
console.log(tea); 

const carSpecs: [number, number] = [400, 3354]; // tuple

const carStats = {
  horsePower: 400,
  weight: 3354
};