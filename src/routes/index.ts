import { Router } from "express";
import userRouter from "./users.routes";
import itemgGameRouter from "./itemGame.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/itemgame", itemgGameRouter);

export default routes;
