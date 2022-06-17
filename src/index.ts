import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharCollection';

// const numbers = new NumbersCollection([1, 4, 3, 2]);
// const sorter = new Sorter(numbers);
// console.log(sorter.collection);
// sorter.sort();
// console.log(sorter.collection);

const str = new CharactersCollection('Xbeya');
const sorter = new Sorter(str);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
