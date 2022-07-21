export interface PlayerInterface {
  getName(): string;
  getMoney(): number;
  subtractMoney(value: number): void;
  addMoney(value: number): void;
}