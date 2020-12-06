import { Router } from "express";
// import UserRepository from "../repositories/UserRepository";

const userRouter = Router();

// const userRepository = new UserRepository();

userRouter.get("/", (request, response) => {
  response.send("Users");
});
export default userRouter;
