"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollections extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const aux = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = aux;
        this.data = characters.join(''); // updating data with the new string
    }
}
exports.CharactersCollections = CharactersCollections;
