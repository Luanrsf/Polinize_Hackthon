import { getRepository } from 'typeorm';
import User from '../models/User'
import AppError from "../errors/AppError";
import ItemGame from '../models/ItemGame';
import Ratting from '../models/Ratting';

interface Request {
  title: string;
  type: "console" | "jogo" | "board-games" | "perifericos",
  description: string;
  user: string,
  ratting: "Otimo" | "Razoavel" | "Ruim",
}

class CreateItemGamesService {
    public async execute({
        title,
        type,
        description,
        user,
        ratting,
    }: Request): Promise<ItemGame>{
        const usersRepository = getRepository(User);

        const rattingsRepository = getRepository(Ratting);

        const itemGamesRepository = getRepository(ItemGame);

        const currentUser = await usersRepository.findOne({
            where: { id: user }
        });

        if (!currentUser){
            throw new AppError('User does not exists')
        }

        if (!['console', 'jogo', 'board-games', 'perdifericos'].includes(type)) {
            throw new AppError('ItemGames type is invalid');
        }

        if (!['Otimo', 'Razoavel', 'Ruim'].includes(ratting)) {
            throw new AppError('Ratting is invalid');
        }

        const checkRattingExists = await rattingsRepository.findOne({
            where: {description: ratting}
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

        const itemGames = itemGamesRepository.create({
            title,
            type,
            description,
            user: currentUser,
            ratting: getNewlyCreatedRatting,
        })

        await itemGamesRepository.save(itemGames);

        return itemGames;
    }
}

export default CreateItemGamesService;