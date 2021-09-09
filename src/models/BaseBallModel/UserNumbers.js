import mongoose from "mongoose";

const userNumbersSchema = new mongoose.Schema({
    numbers: [{ type: Number }],
});

userNumbersSchema.static('inputNumbers', (inputNumbers) => {
    isValidationNumbers(inputNumbers);
    let numbers = [];
    for (let index = 0; index < 3; index++) {
        numbers.push(inputNumbers[index]);
    }
    return numbers;
})

const isValidationNumbers = (inputNumbers) => {
    if (inputNumbers.length != 3) {
        throw new Error("입력한 숫자가 3개가 아닙니다!");
    }
    if (new Set(inputNumbers).size != 3) {
        throw new Error("입력한 숫자중 중복되는 숫자가 있습니다!");
    }
}

const userNumbersModel = mongoose.model("userNumbers", userNumbersSchema);

export default userNumbersModel;