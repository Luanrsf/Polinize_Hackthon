import UserRepository, { IRequestCreate } from "../repositories/UserRepository";

export default class CreateUserService {
  constructor(private usersRepository: UserRepository) {}
  public async execute(data: IRequestCreate): Promise<void> {
    const checkUserExists = await this.usersRepository.findByEmail(data.email);

    if (checkUserExists) {
      throw new Error("Email address already used.");
    }
    await this.usersRepository.create(data);
  }
}
