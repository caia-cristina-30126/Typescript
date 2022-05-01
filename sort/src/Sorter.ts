import { NumbersCollections } from "./NumbersCollections";


interface Sortable  {
  length: number; 
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
 export abstract class Sorter {
   // doar ca sa se poata rula metoda asta, without body
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap (leftIndex: number, rightIndex: number): void;
  abstract length: number;
    
    sort(): void {
      const { length } = this;
      
      for (let i=0; i< length - 1; i++)
      {
        for ( let j= i+1; j< length; j++)
        {
          if (this.compare(i,j)) 
          { 
            this.swap(i,j)   
          }
        }
      }
    }
  }
