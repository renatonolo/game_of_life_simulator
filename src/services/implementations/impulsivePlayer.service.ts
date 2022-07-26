import { PlayerType } from "../../enums/playerType.enum";
import { BuildingInterface } from "../building.interface";
import { SpecificPlayerInterface } from "../specificPlayer.interface";
import { PlayerService } from "./player.service";

export class ImpulsivePlayer extends PlayerService implements SpecificPlayerInterface {
  constructor() {
    super(PlayerType.impulsive);
  }

  canBuy(building: BuildingInterface): boolean {
    return true;
  }
}