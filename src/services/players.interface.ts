import { PlayerType } from "../enums/playerType.enum";
import { BuildingInterface } from "./building.interface";
import { PlayerInterface } from "./player.interface";

export interface PlayersInterface {
  createPlayers(): void;
  hasWinner(): boolean;
  takePlayersOrder(): PlayerType[];
  payRent(from: PlayerInterface, to: PlayerInterface, building: BuildingInterface): void;
  addBonus(to: PlayerInterface): void;
}