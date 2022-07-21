import { PlayerType } from "../../enums/playerType.enum";
import { BuildingInterface } from "../building.interface";
import { SpecificPlayerInterface } from "../specificPlayer.interface";
import { PlayerService } from "./player.service";

export class DemandingPlayer extends PlayerService implements SpecificPlayerInterface {
  constructor() {
    super(PlayerType.demanding);
  }

  canBuy(building: BuildingInterface): boolean {
    return building.getRentPrice() > 50;
  }
}