import { PlayerType } from "../../enums/playerType.enum";
import { PlayerInterface } from "../player.interface";

export class PlayerService implements PlayerInterface {
  private playerName: string;
  protected money: number;

  constructor(playerType: PlayerType) {
    if (!process.env.INITIAL_MONEY) throw new Error("INITIAL_MONEY environment not found.");

    this.playerName = playerType;
    this.money = parseInt(process.env.INITIAL_MONEY);
  }

  getName(): string {
    return this.playerName;
  }

  getMoney(): number {
    return this.money;
  }

  subtractMoney(value: number): void {
    this.money -= value;

    if (this.money < 0) this.money = 0;
  }

  addMoney(value: number): void {
    this.money += value;
  }
}