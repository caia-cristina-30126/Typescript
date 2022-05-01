import { Sorter } from "./Sorter";

export class NumbersCollections extends Sorter {

  get length(): number {
    return this.data.length;
  }

  constructor(public data: number[]) {
   super();
  }
  
  sort(): void {
    const { length } = this;
  for ( let i=0; i< length - 1; i++){
    for (let j= i+1; j< length; j++){
      if( this.compare(i, j)){
        this.swap(i,j);
      }
    }
  } 
 }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const aux = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = aux;
  }

}

