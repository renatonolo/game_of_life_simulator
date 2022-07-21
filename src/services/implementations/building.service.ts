import { BuildingInterface } from "../building.interface";
import { PlayerInterface } from "../player.interface";

export class Building implements BuildingInterface {
  private name: string;
  private sellPrice: number;
  private rentPrice: number;
  private owner?: PlayerInterface;

  constructor(name: string, sellPrice: number, rentPrice: number) {
    this.name = name;
    this.sellPrice = sellPrice;
    this.rentPrice = rentPrice;
  }

  getSellPrice(): number {
    return this.sellPrice;
  }

  getRentPrice(): number {
    return this.rentPrice;
  }

  getName(): string {
    return this.name;
  }

  getOwner(): PlayerInterface | undefined {
    return this.owner;
  }

  canBeBought(): boolean {
    return !this.owner;
  }

  public addOwner(player: PlayerInterface): void {
    if (this.owner) throw new Error("You can't buy this building. This building already has an owner.");

    this.owner = player;
  }
}