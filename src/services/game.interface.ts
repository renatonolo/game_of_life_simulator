import { BuildingInterface } from "./building.interface";
import { PlayerInterface } from "./player.interface";

export interface GameServiceInterface {
  start(): void;
  simulate(): void;
  getWinner(): PlayerInterface;
  getPlayers(): PlayerInterface[];
}