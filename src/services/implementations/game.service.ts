import { BoardInterface } from "../board.interface";
import { BuildingInterface } from "../building.interface";
import { GameServiceInterface } from "../game.interface";
import { PlayerInterface } from "../player.interface";
import { PlayersInterface } from "../players.interface";
import { BoardServices } from "./board.service";
import { DiceService } from "./dice.service";
import { PlayersService } from "./players.service";

export class GameService implements GameServiceInterface {
  private playersService: PlayersInterface;
  private boardService: BoardInterface;
  private diceService: DiceService

  constructor() {
    this.playersService = new PlayersService();
    this.boardService = BoardServices.getInstance();
    this.diceService = new DiceService();
  }

  public start(): void {
    this.playersService.createPlayers();
    this.boardService.createBuildings();
  }

  public simulate(): void {
    throw new Error("Method not implemented.");
  }

  public getWinner(): PlayerInterface {
    throw new Error("Method not implemented.");
  }

  public getPlayers(): PlayerInterface[] {
    throw new Error("Method not implemented.");
  }

  public payRent(from: PlayerInterface, to: PlayerInterface, building: BuildingInterface): void {
    from.subtractMoney(building.getRentPrice());
    to.addMoney(building.getRentPrice());
  }
}