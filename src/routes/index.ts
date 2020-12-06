import { Router } from "express";
import userRouter from "./users.routes";
import itemGameRouter from "./itemGame.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/itemgames", itemGameRouter);

export default routes;
