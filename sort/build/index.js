"use strict";
/* class Sorter { // WRONG, but working
  
  constructor(public collection: number[] | string) {}
    
    sort(): void {
      const { length } = this.collection;
      
      for (let i=0; i< length - 1; i++)
      {
        for ( let j= i+1; j< length; j++)
        {
          // if collection is an array of number[]
          if(this.collection instanceof Array) {
            // collection == number[]
          if (this.collection[i]>this.collection[j])
          {
            const aux = this.collection[i];
            this.collection[i] = this.collection[j];
            this.collection[j] = aux;
          }
        }

          // if collection is a string, do this logic instead:
          if(typeof this.collection === 'string') { // narrow type of a value to a primitive type (number, string, boolean)

        }
      }
    }
  } */
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollections_1 = require("./CharactersCollections");
const LinkedList_1 = require("./LinkedList");
/* const numbersCollections  = new NumbersCollections([0, -45, -7, 8]);
numbersCollections.sort();
console.log(numbersCollections.data);  */
const characterCollection = new CharactersCollections_1.CharactersCollections('Xaaayes');
characterCollection.sort();
console.log(characterCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-34);
linkedList.add(90);
linkedList.add(250);
linkedList.sort();
linkedList.print();
