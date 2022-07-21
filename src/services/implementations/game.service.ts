import { BoardInterface } from "../board.interface";
import { GameServiceInterface } from "../game.interface";
import { PlayerInterface } from "../player.interface";
import { PlayersInterface } from "../players.interface";
import { BoardServices } from "./board.service";
import { PlayersService } from "./players.service";

export class GameService implements GameServiceInterface {
  private playersService: PlayersInterface;
  private boardService: BoardInterface;

  constructor() {
    this.playersService = new PlayersService();
    this.boardService = BoardServices.getInstance();
  }

  start(): void {
    this.playersService.createPlayers();
    this.boardService.createBuildings();
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