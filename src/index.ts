import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharCollection';
import { LinkedList } from './linkedList';

// const numbers = new NumbersCollection([1, 4, 3, 2]);
// const sorter = new Sorter(numbers);
// console.log(sorter.collection);
// sorter.sort();
// console.log(sorter.collection);

// const str = new CharactersCollection('Xbeya');
// const sorter = new Sorter(str);
// console.log(sorter.collection);
// sorter.sort();
// console.log(sorter.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
