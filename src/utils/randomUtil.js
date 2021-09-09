export class randomUtil {
    static createNumbers = () => {
        var numbers = new Set();
        while (numbers.size < 3) {
            numbers.add(this.#createNumber());
        }
        return Array.from(numbers);
    }

    static #createNumber = () => {
        return Math.floor((Math.random() * 9) + 1);
    }
}
