import { Request, Response } from "express";
import { GameServiceInterface } from "../../../services/game.interface";
import { GameService } from "../../../services/implementations/game.service";
import { GameControllerInterface } from "../game.interface";

export class GameController implements GameControllerInterface {

  constructor() {
  }

  simulate(req: Request, res: Response): void {
    const gameService: GameServiceInterface = new GameService();

    gameService.start();
    gameService.simulate();

    const winner = gameService.getWinner();
    const players = gameService.getPlayers();

    res.send({
      vencedor: winner.getName(),
      jogadores: players.map(p => p.getName()),
    });
  }
}