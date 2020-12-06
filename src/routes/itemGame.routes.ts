import { Router } from "express";
import CreateItemGamesService from "../services/CreateItemGames";

const ItemGameRouter = Router();

ItemGameRouter.post("/", async (request, response) => {
    const { title, type, description, user, ratting } = request.body;

    const createItemGames = new CreateItemGamesService();

    const itemGames = await createItemGames.execute({
        title,
        type,
        description,
        user,
        ratting,
    });

    return response.json(itemGames);
});

export default ItemGameRouter;
