import { BaseBall } from "./BaseBall";

export class UserNumbers {
    numbers = [];

    inputNumbers = (inputNumbers) => {
        this.isValidationNumbers(inputNumbers);
        for (let index = 0; index < 3; index++) {
            var baseBallNumber = new BaseBall(parseInt(inputNumbers[index]));
            this.numbers.push(baseBallNumber);
        }
    }

    isValidationNumbers = (inputNumbers) => {
        if (inputNumbers.length != 3) {
            throw new Error("입력한 숫자가 3개가 아닙니다!");
        }
        if (new Set(inputNumbers).size != 3) {
            throw new Error("입력한 숫자중 중복되는 숫자가 있습니다!");
        }
    }
}