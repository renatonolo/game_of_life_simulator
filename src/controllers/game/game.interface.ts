import { Request, Response } from "express";

export interface GameControllerInterface {
  simulate(req: Request, res: Response): void
}