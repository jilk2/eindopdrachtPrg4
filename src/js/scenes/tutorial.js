import { Actor, Engine, Scene, Keys } from "excalibur";
import { Resources } from "../resources.js";
import { Background } from "../background.js";

export class Tutorial extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Tutorial);
    this.add(background);
    console.log("you died!");
  }

  onPreUpdate(engine) {
    let kb = engine.input.keyboard;

    if (kb.wasPressed(Keys.Enter)) {
      engine.goToScene("level");
    }
  }
}
