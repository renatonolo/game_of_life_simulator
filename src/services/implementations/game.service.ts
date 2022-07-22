import { LogUtils } from "../../utils/log.utils";
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
  private diceService: DiceService;
  private limitOfRounds: number;

  constructor() {
    if (!process.env.LIMIT_OF_ROUNDS) throw new Error("LIMIT_OF_ROUNDS environment not found.");

    this.playersService = new PlayersService();
    this.boardService = new BoardServices();
    this.diceService = new DiceService();
    this.limitOfRounds = parseInt(process.env.LIMIT_OF_ROUNDS);
  }

  public start(): void {
    this.playersService.createPlayers();
    this.boardService.createBuildings();

    const players = this.playersService.getPlayers();
    this.boardService.putPlayers(players);
  }

  public simulate(): void {
    let round = 0;
    const players = this.playersService.getPlayers();

    while(round < this.limitOfRounds && !this.playersService.hasWinner()) {
      for (const player of players) {
        const dice = this.diceService.roll();

        this.boardService.walk(player, dice);

        const building = this.boardService.getBuildingAtPlayerPosition(player);
        const owner = building.getOwner();


        if (owner) {
          if (owner.getName() === player.getName()) {
            LogUtils.print("Wow, this building is already mine!");
          } else {
            LogUtils.print(`The building ${building.getName()} has a owner.`);
            this.payRent(player, owner, building);
          }

        } else {
          if (player.canBuy(building)) {
            LogUtils.print(`The building ${building.getName()} has no owner.`);
            this.buyBuilding(player, building);
          } else {
            LogUtils.print(`The building ${building.getName()} keep available.`);
            LogUtils.print(`Player ${player.getName()} dont wanna buy this building.`);
          }
        }

        LogUtils.print(`Player ${player.getName()} has now $ ${player.getMoney()},00`);
        LogUtils.breakLine();
      }

      LogUtils.print(`Round ${round} finished...`);
      LogUtils.breakLine();

      round++;
    }

    this.printWinner();
  }

  public getPlayers(): PlayerInterface[] {
    return this.playersService.getPlayers();
  }

  public getWinner(): PlayerInterface {
    return this.playersService.getWinner();
  }

  private payRent(from: PlayerInterface, to: PlayerInterface, building: BuildingInterface): void {
    from.subtractMoney(building.getRentPrice());
    to.addMoney(building.getRentPrice());

    LogUtils.print(`Player ${from.getName()} paid $ ${building.getRentPrice()},00 to player ${to.getName()}.`);
    LogUtils.print(`Player ${to.getName()} has now $ ${to.getMoney()},00.`);
  }

  private buyBuilding(player: PlayerInterface, building: BuildingInterface): void {
    player.subtractMoney(building.getSellPrice());
    building.addOwner(player);

    LogUtils.print(`Player ${player.getName()} bought the building ${building.getName()}.`);
  }

  private printWinner() {
    const players = this.playersService.getPlayers();

    LogUtils.print("Game over. We have a winner!\n");

    for (const player of players) {
      LogUtils.print(`Player ${player.getName()} finished with $ ${player.getMoney()},00`);
    }

    LogUtils.print(`\nCongratulations player ${players[0].getName()}!`);
  }
}