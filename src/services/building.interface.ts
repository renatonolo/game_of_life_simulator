import { PlayerInterface } from "./player.interface";

export interface BuildingInterface {
  getName(): string;
  getSellPrice(): number;
  getRentPrice(): number;
  getOwner(): PlayerInterface | undefined;
}