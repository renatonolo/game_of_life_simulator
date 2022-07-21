import { Router } from "express";

export interface Routes {
  build(): Router;
}