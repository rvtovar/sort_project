"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(index) {
        return (this.data[index].toLowerCase() > this.data[index + 1].toLocaleLowerCase());
    }
    swap(index) {
        const characters = this.data.split('');
        [characters[index], characters[index + 1]] = [
            characters[index + 1],
            characters[index],
        ];
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
