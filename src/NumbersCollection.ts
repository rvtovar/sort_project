import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  compare(index: number): boolean {
    return this.data[index] > this.data[index + 1];
  }

  swap(index: number): void {
    [this.data[index], this.data[index + 1]] = [
      this.data[index + 1],
      this.data[index],
    ];
  }

  get length(): number {
    return this.data.length;
  }
}
