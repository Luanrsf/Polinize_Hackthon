import { getRepository } from 'typeorm';
import User from '../models/User'
import AppError from "../errors/AppError";

interface Request {
  name: string;
  email: string;
  telNumber: string;
  password: string;
}

export default class CreateUserService {
  public async execute({
    name,
    email,
    telNumber,
    password
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email: email },
    })

    if (checkUserExists) {
      throw new AppError("Email address already used.");
    }

    const user = await usersRepository.create({
      name,
      email,
      telNumber,
      password
    });

    await usersRepository.save(user);

    return user;
  }
}
