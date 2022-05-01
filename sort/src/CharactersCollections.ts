import { Sorter } from "./Sorter";

export class CharactersCollections extends Sorter{
  constructor(public data: string){
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
    this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLocaleLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const aux = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = aux;

    this.data = characters.join(''); // updating data with the new string
  }
}