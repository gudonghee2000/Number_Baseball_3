import { BaseBall } from "./BaseBall";

export class SystemNumbers {
    numbers = [];

    inputSystemNumbers = (randomNumbers) => {
        for (let index = 0; index < 3; index++) {
            var baseBallNumber = new BaseBall(randomNumbers[index]);
            this.numbers.push(baseBallNumber);
        }
    }
}