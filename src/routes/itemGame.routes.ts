import { Router } from "express";
import { getRepository } from "typeorm";
import ItemGame from "../models/ItemGame";
import CreateItemGamesService from "../services/CreateItemGames";

const ItemGameRouter = Router();

ItemGameRouter.get('/', async (request, response) => {
    const itemGamesRepository = getRepository(ItemGame);

    const itemGames = await itemGamesRepository.find();

    return response.json(itemGames);
});

ItemGameRouter.post("/", async (request, response) => {
    const { title, type, description, picture, user, ratting } = request.body;

    const createItemGames = new CreateItemGamesService();

    const itemGames = await createItemGames.execute({
        title,
        type,
        description,
        picture,
        user,
        ratting,
    });

    return response.json(itemGames);
});

export default ItemGameRouter;
