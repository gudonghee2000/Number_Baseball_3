import mongoose from "mongoose";

const systemNumbersSchema = new mongoose.Schema({
    numbers: [{ type: Number }],
});

systemNumbersSchema.static('inputNumbers', function(randomNumbers){
    let numbers = [];
    for (let index = 0; index < 3; index++) {
        numbers.push(randomNumbers[index]);
    }
    return numbers;
});

const systemNumbersModel = mongoose.model("systemNumbers", systemNumbersSchema);

export default systemNumbersModel;
