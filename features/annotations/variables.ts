let apples: number = 5; // "number" is a type annotation
// we use let bc we can reassignment the value within the code
let speed: string = 'fast';
let hasName: boolean = true;


let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date(); 

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3,4,5];
let iDontKnow: boolean[] = [true, false, false, true, true];

// Classes
class Car {

}
let car: Car = new Car();
// Car is a class, car is a varriable that refers to an instance of a car


// Object literal
let point: {x: number; y: number } = {
  x: 10,
  y: 20
  
};


// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


 // When to use annotations:
 // 1) Function that returns the 'any' type

 const json = '{"x": 10, "y": 20}';
 const coordinates: { x: number; y: number } = JSON.parse(json); // JSON returns a value into 'any' , so we had to add annotations
 console.log(coordinates);


 // 2) When we declare a variable on one line and initializate it later

 let words = ['red', 'green', 'blue', 'blue', 'yellow'];
 let foundWord: boolean; // this is type annotation

for( let i=0; i< words.length; i++) {
  if (words[i] == 'blue'){
    foundWord = true;  
    console.log(foundWord);
  }
}


// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i=0; i< numbers.length; i++){
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
    console.log(numberAboveZero);
  }
}