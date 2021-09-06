import express from "express";
import { getBaseballGame, postBaseballGame } from "../controllers/gameController";

const baseballGameRouter = express.Router();

baseballGameRouter.route("/").get(getBaseballGame).post(postBaseballGame);

export default baseballGameRouter;