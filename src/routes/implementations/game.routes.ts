import { Router } from "express";
import { GameControllerInterface } from "../../controllers/game/game.interface";
import { GameController } from "../../controllers/game/implementations/game.controller";
import { Routes } from "../routes.interface";

export class GameRoutes implements Routes {
  private router: Router;
  private gameController: GameControllerInterface;

  constructor() {
    this.router = Router();
    this.gameController = new GameController();
  }

  build(): Router {
    this.router.get("/simular", this.gameController.simulate);

    return this.router;
  }

}