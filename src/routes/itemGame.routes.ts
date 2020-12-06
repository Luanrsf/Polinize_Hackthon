import { Router } from "express";
// import ItemGameRepository from "../repositories/ItemGameRepository";

const ItemGameRouter = Router();

// const itemGameRepository = new ItemGameRepository();
// const userRepository = new UserRepository();

ItemGameRouter.get("/", (request, response) => {
  response.send("Chegou");
});

export default UserRouter;
