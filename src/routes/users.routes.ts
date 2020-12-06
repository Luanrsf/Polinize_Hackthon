import { Router } from "express";
// import UserRepository from "../repositories/UserRepository";
import CreateUserService from "../services/CreateUserServices";
import UserRepository from "../repositories/UserRepository";

const userRouter = Router();

const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);

userRouter.post("/", async (request, response) => {
  const data = request.body;
  try {
    const user = await createUserService.execute(data);
    response.send(user);
  } catch (err) {
    console.log(err);
  }
});
export default userRouter;
