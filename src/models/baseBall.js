export class BaseBall {
    number;

    constructor(number) {
        this.isValidationNumber(number);
        this.number = number;
    }

    isValidationNumber = (number) => {
        if (isNaN(number)) {
            throw new Error("입력한 숫자 중 숫자가 아닌것이 있습니다!");
        }
        console.log(number);
    }
}