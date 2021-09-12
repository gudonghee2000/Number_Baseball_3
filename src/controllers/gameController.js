import { randomUtil } from "../utils/randomUtil";
import UserNumbers from "../models/BaseBallModel/UserNumbers";
import SystemNumbers from "../models/BaseBallModel/SystemNumbers";

export const getBaseballGame = async (req, res) => {
    const systemNumbersCount = await SystemNumbers.count({});
    if (systemNumbersCount === 0) {
        await SystemNumbers.create({
            numbers: SystemNumbers.inputNumbers(randomUtil.createNumbers()),
        });
    }
    res.render("baseballGame", { pageTitle: "BaseBallGame⚾" });
}

export const postBaseballGame = async (req, res) => {
    const { inputNumbers } = req.body;
    const userNumbersCount = await UserNumbers.count({});
    if (userNumbersCount === 1) {
        await UserNumbers.deleteMany({});
    }
    await UserNumbers.create({
        numbers: UserNumbers.inputNumbers(inputNumbers.split("")),
    });
    const userNumbers = await UserNumbers.findOne();
    const systemNumbers = await SystemNumbers.findOne();
    const strikeCount = SystemNumbers.getStrikeCount(systemNumbers.numbers, userNumbers.numbers);
    const ballCount = SystemNumbers.getBallCount(systemNumbers.numbers, userNumbers.numbers);
    console.log(strikeCount);
    console.log(ballCount);
    res.render("baseballGame", { pageTitle: "BaseBallGame⚾", strikeCount:strikeCount, ballCount:ballCount });
}

