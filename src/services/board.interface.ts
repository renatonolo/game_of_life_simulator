export interface BoardInterface {
  createBuildings(): void;
  putPlayers(players: PlayerInterface[]): void;
  getBuildingAtPlayerPosition(player: PlayerInterface): BuildingInterface;
}