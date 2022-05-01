"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollections = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollections extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    sort() {
        const { length } = this;
        for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
                if (this.compare(i, j)) {
                    this.swap(i, j);
                }
            }
        }
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const aux = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = aux;
    }
}
exports.NumbersCollections = NumbersCollections;
