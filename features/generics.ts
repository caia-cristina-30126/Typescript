class ArrayOfNumbers {
  constructor(public collection: number []) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// GENERICS
class ArrayOfAnything<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}
 // AXIOUS is a generic type 
const arr = new ArrayOfAnything<string>(['a', 'b', 'c']);
new ArrayOfAnything<number>([0, 7, 4, 9]);


// Example of generics with functions:

function printStrings(arr: string[]): void {

  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]):void {
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

// generics
function printAnything<T>(arr: T[]): void {
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'd']);


// GENERIC CONSTRAINTS

class Cars {
  print() {
    console.log('I am a car')
  }
}

class Houses {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void { // whatever type T I put in here,
  // it's gonna have all the prop. that the interface Printable has.
  for(let i=0; i<arr.length; i++){
    arr[i].print();
  }
}

printHousesOrCars<Houses>([new Houses(), new Houses()]);
printHousesOrCars<Cars>([new Cars(), new Cars()]);
