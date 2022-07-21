import { PlayerType } from "../enums/playerType.enum";

export interface PlayersInterface {
  createPlayers(): void;
  hasWinner(): boolean;
  takePlayersOrder(): PlayerType[];
}