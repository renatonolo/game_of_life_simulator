import { NumberUtils } from "../../utils/number.utils";
import { DiceInterface } from "../dice.interface";

export class DiceService implements DiceInterface {
  private diceSize: number;
  private lastValue: number = -1;

  constructor() {
    if (!process.env.DICE_SIZE) throw new Error("DICE_SIZE environment not found.");

    this.diceSize = parseInt(process.env.DICE_SIZE);
    this.roll();
  }

  public roll(): number {
    this.lastValue = NumberUtils.random(1, this.diceSize);

    return this.lastValue;
  }

  public getLastValue(): number {
    return this.lastValue;
  }
}