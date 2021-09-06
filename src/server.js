import express from "express";
import rootRouter from "./routers/rootRouter";
import baseballGameRouter from "./routers/gameRouter";

const PORT = 4500;

const app = express();

const handleListening = () => console.log(`Server listen To ${PORT}🔑PORT`);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", rootRouter);
app.use("/game", baseballGameRouter);

app.listen(PORT, handleListening);