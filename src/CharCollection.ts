import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(index: number): boolean {
    return (
      this.data[index].toLowerCase() > this.data[index + 1].toLocaleLowerCase()
    );
  }

  swap(index: number): void {
    const characters = this.data.split('');
    [characters[index], characters[index + 1]] = [
      characters[index + 1],
      characters[index],
    ];

    this.data = characters.join('');
  }
}
