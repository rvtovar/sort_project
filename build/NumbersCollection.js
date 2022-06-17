"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(index) {
        return this.data[index] > this.data[index + 1];
    }
    swap(index) {
        [this.data[index], this.data[index + 1]] = [
            this.data[index + 1],
            this.data[index],
        ];
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
