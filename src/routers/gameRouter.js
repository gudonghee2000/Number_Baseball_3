import express from "express";
import { baseballGame } from "../controllers/gameController";

const baseballGameRouter = express.Router();

baseballGameRouter.get("/", baseballGame);

export default baseballGameRouter;