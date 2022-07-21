import { PlayerType } from "../../enums/playerType.enum";
import { BuildingInterface } from "../building.interface";
import { SpecificPlayerInterface } from "../specificPlayer.interface";
import { PlayerService } from "./player.service";

export class CautiousPlayer extends PlayerService implements SpecificPlayerInterface {
  constructor() {
    super(PlayerType.cautious);
  }

  getMoney(): number {
    return this.money;
  }

  canBuy(building: BuildingInterface): boolean {
    return this.money - building.getSellPrice() >= 80;
  }
}