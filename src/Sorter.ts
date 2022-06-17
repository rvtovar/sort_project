export interface Sortable {
  compare(index: number): boolean;
  swap(index: number): void;
  length: number;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j)) {
          this.collection.swap(j);
        }
      }
    }
  }
}
