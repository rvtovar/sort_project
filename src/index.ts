import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharCollection';
import { LinkedList } from './linkedList';

const numbers = new NumbersCollection([1, 4, 3, 2]);
numbers.sort();
console.log(numbers.data);

const str = new CharactersCollection('Xbeya');
str.sort();
console.log(str.data);

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
