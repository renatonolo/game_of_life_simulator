import { PlayerType } from "../../enums/playerType.enum";
import { NumberUtils } from "../../utils/number.utils";
import { BuildingInterface } from "../building.interface";
import { SpecificPlayerInterface } from "../specificPlayer.interface";
import { PlayerService } from "./player.service";

export class RandomPlayer extends PlayerService implements SpecificPlayerInterface {
  constructor() {
    super(PlayerType.random);
  }

  canBuy(building: BuildingInterface): boolean {
    return NumberUtils.random(1, 2) == 2;
  }
}