import { PlayerType } from "../../enums/playerType.enum";
import { BuildingInterface } from "../building.interface";
import { PlayerInterface } from "../player.interface";

export class PlayerService implements PlayerInterface {
  private playerName: string;
  protected money: number;

  constructor(playerType: PlayerType) {
    if (!process.env.INITIAL_MONEY) throw new Error("INITIAL_MONEY environment not found.");

    this.playerName = playerType;
    this.money = parseInt(process.env.INITIAL_MONEY);
  }

  public getName(): string {
    return this.playerName;
  }

  public getMoney(): number {
    return this.money;
  }

  public subtractMoney(value: number): void {
    this.money -= value;

    if (this.money < 0) this.money = 0;
  }

  public addMoney(value: number): void {
    this.money += value;
  }

  public hasMoneyToBuyBuilding(building: BuildingInterface): boolean {
    return this.money >= building.getSellPrice();
  }
}