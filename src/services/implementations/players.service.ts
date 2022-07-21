import { PlayerType } from "../../enums/playerType.enum";
import { NumberUtils } from "../../utils/number.utils";
import { BuildingInterface } from "../building.interface";
import { PlayerInterface } from "../player.interface";
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

  public createPlayers(): void {
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
  }

  public hasWinner(): boolean {
    let winnerAmount = 0;

    Array.from(this.players.values()).forEach(player => {
      if (player.getMoney() > 0) winnerAmount++;
    });

    return winnerAmount == 1;
  }

  public takePlayersOrder(): PlayerType[] {
    const out: PlayerType[] = [];
    const order = NumberUtils.randomDefinedNumbers(this.playersNames.length);

    for (let i = 0; i < this.playersNames.length; i++) {
      const pos = order[i] - 1;
      out.push(this.playersNames[pos]);
    }

    return out;
  }

  payRent(from: PlayerInterface, to: PlayerInterface, building: BuildingInterface): void {
    from.subtractMoney(building.getRentPrice());
    to.addMoney(building.getRentPrice());
  }

  addBonus(to: PlayerInterface): void {
    if (!process.env.BONUS_MONEY) throw new Error("BONUS_MONEY environment not found.");

    const bonusMoney = parseInt(process.env.BONUS_MONEY);

    to.addMoney(bonusMoney);
  }
}
