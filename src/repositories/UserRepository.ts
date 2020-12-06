import User from "../models/User";
import { getRepository, Repository } from "typeorm";
export interface IRequestCreate {
  name: string;
  email: string;
  telNumber: string;
  avatar: string;
}

class UserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }
  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });
    return user;
  }

  public async save(user: User): Promise<User> {
    return await this.ormRepository.save(user);
  }

  public async create(userData: IRequestCreate): Promise<void> {
    console.log(userData);
  }
}
export default UserRepository;
