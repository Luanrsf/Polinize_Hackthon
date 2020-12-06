import { Router } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
// import UserRepository from "../repositories/UserRepository";
import CreateUserService from "../services/CreateUserService";

const userRouter = Router();



userRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return response.json(users);
});

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
