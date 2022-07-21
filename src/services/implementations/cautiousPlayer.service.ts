import { PlayerType } from "../../enums/playerType.enum";
import { SpecificPlayerInterface } from "../specificPlayer.interface";
import { PlayerService } from "./player.service";

export class CautiousPlayer extends PlayerService implements SpecificPlayerInterface {
  constructor() {
    super(PlayerType.cautious);
  }
}