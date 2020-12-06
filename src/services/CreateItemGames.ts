import { getRepository } from 'typeorm';
import User from '../models/User'
import AppError from "../errors/AppError";
import ItemGame from '../models/ItemGame';
import Ratting from '../models/Ratting';

interface Request {
  title: string;
  type: "console" | "jogo" | "board-games" | "perifericos";
  description: string;
  picture: string;
  user: string;
  ratting: string;
}

class CreateItemGamesService {
    public async execute({
        title,
        type,
        description,
        picture,
        user,
        ratting,
    }: Request): Promise<ItemGame>{
        const usersRepository = getRepository(User);

        const rattingsRepository = getRepository(Ratting);

        const itemGamesRepository = getRepository(ItemGame);


         const currentUser = await usersRepository.findOne({
             where: { id: user }
         });

        const checkRattingExists = await rattingsRepository.findOne({
            where: { description: ratting }
        })

        if(!checkRattingExists){
            const createRatting = rattingsRepository.create({
                description: ratting,
            });
    
            await rattingsRepository.save(createRatting);
        }

        const getNewlyCreatedRatting = await rattingsRepository.findOne({
            where: { description: ratting }
        })

        const itemGame = itemGamesRepository.create({
            title,
            type,
            description,
            picture,
            user: currentUser,
            ratting: getNewlyCreatedRatting,
        })

        await itemGamesRepository.save(itemGame)

        return itemGame;
    }
}

export default CreateItemGamesService;