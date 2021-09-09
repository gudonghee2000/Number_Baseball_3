import { randomUtil } from "../utils/randomUtil";
import { SystemNumbers } from "../models/systemNumbers";
import { UserNumbers } from "../models/UserNumbers";

export const getBaseballGame = (req, res) => {
    var systemNumbers = new SystemNumbers();
    systemNumbers.inputSystemNumbers(randomUtil.createNumbers());
    res.render("baseballGame", { pageTitle: "BaseBallGame⚾" });
}

export const postBaseballGame = (req, res) => {
    const { inputNumbers } = req.body;
    var userNumbers = new UserNumbers();
    userNumbers.inputNumbers(inputNumbers.split(""));
}

