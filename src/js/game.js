import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, Timer } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Level } from "./scenes/level.js";
import { Gameover } from "./scenes/gameover.js";
import { Tutorial } from "./scenes/tutorial.js";
export class Game extends Engine {
  constructor() {
    super({
      width: 1280,
      height: 720,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen,
    });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.add("tutorial", new Tutorial());
    this.add("level", new Level());
    this.add("game-over", new Gameover());
    this.goToScene("tutorial");
  }
}

new Game();
