"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbers = new NumbersCollection_1.NumbersCollection([1, 4, 3, 2]);
const sorter = new Sorter_1.Sorter(numbers);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
