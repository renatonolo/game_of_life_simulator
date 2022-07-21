import { PlayerType } from "../../enums/playerType.enum";
import { PlayersInterface } from "../players.interface";
import { SpecificPlayerInterface } from "../specificPlayer.interface";
import { CautiousPlayer } from "./cautiousPlayer.service";
import { DemandingPlayer } from "./demandingPlayer.service";
import { ImpulsivePlayer } from "./impulsivePlayer.service";
import { RandomPlayer } from "./randomPlayer.service";

export class PlayersService implements PlayersInterface {
  private players: Map<PlayerType, SpecificPlayerInterface>;
  private playersNames: PlayerType[];

  constructor() {
    this.players = new Map();
    this.playersNames = [
      PlayerType.impulsive,
      PlayerType.cautious,
      PlayerType.demanding,
      PlayerType.random,
    ];
  }

  public createPlayers(): boolean {
    for (const name of this.playersNames) {
      switch(name) {
        case PlayerType.impulsive:
        this.players.set(PlayerType.impulsive, new ImpulsivePlayer());
        break;

        case PlayerType.cautious:
        this.players.set(PlayerType.cautious, new CautiousPlayer());
        break;

        case PlayerType.demanding:
        this.players.set(PlayerType.demanding, new DemandingPlayer());
        break;

        case PlayerType.random:
        this.players.set(PlayerType.random, new RandomPlayer());
        break;

        default: throw new Error("Type of player not found.");
      }
    }

    return true;
  }
}
