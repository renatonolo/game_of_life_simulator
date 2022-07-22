// Modules
import express from "express";
import dotenv from "dotenv";
import { GameController } from "./controllers/game/implementations/game.controller";
import { GameControllerInterface } from "./controllers/game/game.interface";

dotenv.config();

const app = express();
const port = process.env.PORT;

const gameController: GameControllerInterface = new GameController();

app.use('/jogo', gameController.simulate);

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}\n`)
});

process.stdin.read();
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
process.on("SIGKILL", shutdown);

function shutdown() {
  console.log('Received kill signal, shutting down gracefully...\n');

  server.close(() => {
    console.log('Closed out remaining connections...\n');
    process.exit(0);
  });
}