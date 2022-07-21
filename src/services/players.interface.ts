import { PlayerType } from "../enums/playerType.enum";
import { BuildingInterface } from "./building.interface";
import { PlayerInterface } from "./player.interface";

export interface PlayersInterface {
  createPlayers(): void;
  hasWinner(): boolean;
  takePlayersOrder(): PlayerType[];
  addBonus(to: PlayerInterface): void;
}