import { randomUtil } from "../utils/randomUtil";

export const getBaseballGame = (req, res) => {
    res.render("baseballGame", { pageTitle: "BaseBallGame⚾" });
    console.log(randomUtil.createNumbers());
}

export const postBaseballGame = (req, res) => {
    const { number } = req.body;
}

