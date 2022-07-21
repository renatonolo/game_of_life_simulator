import { GameServiceInterface } from "../game.interface";
import { PlayerInterface } from "../player.interface";
import { PlayersInterface } from "../players.interface";
import { PlayersService } from "./players.service";

export class GameService implements GameServiceInterface {
  private playersService: PlayersInterface;

  constructor() {
    this.playersService = new PlayersService();
  }

  start(): void {
    this.playersService.createPlayers();
  }

  simulate(): void {
    throw new Error("Method not implemented.");
  }

  getWinner(): PlayerInterface {
    throw new Error("Method not implemented.");
  }

  getPlayers(): PlayerInterface[] {
    throw new Error("Method not implemented.");
  }

}