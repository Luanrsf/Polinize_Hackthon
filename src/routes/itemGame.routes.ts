import { Router } from "express";
import CreateUserService from "../services/CreateUserServices";
import UserRepository from "../repositories/UserRepository";

const ItemGameRouter = Router();

ItemGameRouter.post("/", async (request, response) => {});

export default ItemGameRouter;
