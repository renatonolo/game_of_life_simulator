import { BuildingInterface } from "./building.interface";
import { PlayerInterface } from "./player.interface";

export interface SpecificPlayerInterface extends PlayerInterface {
  canBuy(building: BuildingInterface): boolean;
}