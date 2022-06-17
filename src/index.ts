import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
const numbers = new NumbersCollection([1, 4, 3, 2]);
const sorter = new Sorter(numbers);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
