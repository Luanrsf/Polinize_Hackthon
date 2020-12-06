import { v4 as uuid } from "uuid";

class ItemGame {
  id: string;

  title: string;

  type: "conosole" | "jogo" | "board-games" | "mod/pererifericos";

  picture: string | null;

  description: string;

  created_at: Date;

  updated_at: Date;

  constructor({
    title,
    type,
    picture,
    description,
    created_at,
    updated_at,
  }: Omit<ItemGame, "id">) {
    this.id = uuid();
    this.title = title;
    this.type = type;
    this.picture = picture;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default ItemGame;
