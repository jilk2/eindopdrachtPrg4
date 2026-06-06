import { Actor, Engine, Vector, Scene, Timer } from "excalibur";
import { Resources } from "../resources.js";
import { Background } from "../background.js";

export class Gameover extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Gameover);
    this.add(background);
    console.log("you died!");
  }
}
