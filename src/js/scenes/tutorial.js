import { Actor, Engine, Scene, Keys, Timer } from "excalibur";
import { Resources } from "../resources.js";
import { Background } from "../background.js";

export class Tutorial extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Tutorial);
    this.add(background);

    this.startTimer = new Timer({
      fcn: () => {
        engine.goToScene("level");
      },
      repeats: false,
      interval: 5000,
    });
    this.add(this.startTimer);
  }

  onActivate() {
    this.startTimer.start();
  }
}
