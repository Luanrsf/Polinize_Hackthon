import { Router } from "express";
// import UserRepository from "../repositories/UserRepository";
import CreateUserService from "../services/CreateUserService";

const userRouter = Router();

userRouter.post("/", async (request, response) => {
  const {name, email, telNumber, password} = request.body;
  
  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    telNumber,
    password,
  });

  return response.json(user)
});
export default userRouter;
