"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is an array of numbers
                // if collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        [this.collection[j], this.collection[j + 1]] = [
                            this.collection[j + 1],
                            this.collection[j],
                        ];
                    }
                }
                // Only works if collection is a string
                // if collection is a string do this logic instead
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([1, 4, 3, 2]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
