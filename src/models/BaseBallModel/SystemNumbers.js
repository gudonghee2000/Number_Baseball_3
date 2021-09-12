import mongoose from "mongoose";

const systemNumbersSchema = new mongoose.Schema({
    numbers: [{ type: Number }],
});

systemNumbersSchema.static('inputNumbers', function (randomNumbers) {
    let numbers = [];
    for (let index = 0; index < 3; index++) {
        numbers.push(randomNumbers[index]);
    }
    return numbers;
});

systemNumbersSchema.static('getStrikeCount', function (systemNumbers, inputNumbers) {
    let strikeCount = 0;
    for (let index = 0; index < 3; index++) {
        if (systemNumbers[index] === inputNumbers[index]) {
            strikeCount += 1
        }
    }
    return strikeCount;
});

systemNumbersSchema.static('getBallCount', function (systemNumbers, inputNumbers) {
    let ballCount = 0;
    ballCount = systemNumbers.filter(number => inputNumbers.includes(number)).length;
    for (let index = 0; index < 3; index++) {
        if (systemNumbers[index] === inputNumbers[index]) {
            ballCount -= 1;
        }
    }
    return ballCount;
});


const systemNumbersModel = mongoose.model("systemNumbers", systemNumbersSchema);

export default systemNumbersModel;
