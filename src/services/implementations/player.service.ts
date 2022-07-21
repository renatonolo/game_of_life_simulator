import { PlayerType } from "../../enums/playerType.enum";
import { PlayerInterface } from "../player.interface";

export class PlayerService implements PlayerInterface {
  private playerName: string;

  constructor(playerType: PlayerType) {
    this.playerName = playerType;
  }

  parse(): string {
    return this.playerName;
  }
}