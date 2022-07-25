import { BuildingInterface } from "./building.interface";
import { PlayerInterface } from "./player.interface";

export interface BoardInterface {
  createBuildings(): void;
  putPlayers(players: PlayerInterface[]): void;
  walk(player: PlayerInterface, steps: number): void;
  getBuildingAtPlayerPosition(player: PlayerInterface): BuildingInterface;
  getPlayerPosition(player: PlayerInterface): number;
}