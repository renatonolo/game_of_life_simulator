import { NumberUtils } from "../../utils/number.utils";
import { BoardInterface } from "../board.interface";
import { BuildingInterface } from "../building.interface";
import { Building } from "./building.service";

export class BoardServices implements BoardInterface {
  private static instance: BoardInterface;
  private buildings: BuildingInterface[];

  constructor() {
    this.buildings = [];
  }

  public static getInstance(): BoardInterface {
    if (!this.instance) this.instance = new BoardServices();

    return this.instance;
  }

  createBuildings(): void {
    if (this.buildings.length > 0) return;

    if (!process.env.BUILDINGS_AMOUNT) throw new Error("BUILDINGS_AMOUNT environment not found.");
    if (!process.env.SELL_PRICE_MIN) throw new Error("SELL_PRICE_MIN environment not found.");
    if (!process.env.SELL_PRICE_MAX) throw new Error("SELL_PRICE_MAX environment not found.");
    if (!process.env.RENT_PRICE_MIN) throw new Error("RENT_PRICE_MIN environment not found.");
    if (!process.env.RENT_PRICE_MAX) throw new Error("RENT_PRICE_MAX environment not found.");

    const amount = parseInt(process.env.BUILDINGS_AMOUNT);
    const sellPriceMin = parseInt(process.env.SELL_PRICE_MIN);
    const sellPriceMax = parseInt(process.env.SELL_PRICE_MAX);
    const rentPriceMin = parseInt(process.env.RENT_PRICE_MIN);
    const rentPriceMax = parseInt(process.env.RENT_PRICE_MAX);

    for (let i = 1; i <= amount; i++) {
      const sellPrice = NumberUtils.random(sellPriceMin, sellPriceMax);
      const rentPrice = NumberUtils.random(rentPriceMin, rentPriceMax);
      const building = new Building(`building_${i}`, sellPrice, rentPrice);

      this.buildings.push(building);
    }

    this.printBuildings();
  }

  public putPlayers(players: PlayerInterface[]): void {
    players.forEach(player => {
      this.playerPosition.set(player.getName(), -1);
    });
  }

  public getBuildingAtPlayerPosition(player: PlayerInterface): BuildingInterface {
    const playerPosition = this.getPlayerPosition(player);
    return this.buildings[playerPosition];
  }

  private printBuildings(): void {
    LogUtils.print("====================== Buildings =========================");

    for (const building of this.buildings) {
      LogUtils.print(`Building ${building.getName()}`);
      LogUtils.print(`Sell: $ ${building.getSellPrice()},00`);
      LogUtils.print(`Rent: $ ${building.getRentPrice()},00`);
      LogUtils.print(`Owner: ${building.getOwner() ? building.getOwner() : 'Nobody'}`);
      LogUtils.print("\n");
    }

    LogUtils.print("========================================================\n");
  }
}