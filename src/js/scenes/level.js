import { Actor, Engine, Vector, Scene, Timer, randomInRange } from "excalibur";
import { Resources } from "../resources.js";
import { Background } from "../background.js";
import { Soldier } from "../gameobjects/soldier.js";
import { Bullet } from "../gameobjects/bullet.js";
import { Zombie } from "../gameobjects/zombie.js";

export class Level extends Scene {
  onInitialize(engine) {
    console.log("this level is created only once.");
    const background = new Background(Resources.Background);

    this.add(background);
    console.log("Starting Game");

    this.playerOne = new Soldier(200, 200, "1");
    this.add(this.playerOne);

    this.spawnZombies()


    this.zombieTimer = new Timer({
      fcn: () => {
        this.spawnZombies();
      },
      repeats: true,
      interval: 5000,
    });
    this.add(this.zombieTimer);
    this.zombieTimer.start();
  }

  spawnZombies() {
    for (let index = 0; index < randomInRange(1, 5); index++) {
      this.zombie = new Zombie();
      this.add(this.zombie);
    }
  }

  spawnBullet(x, y, rot) {
    const bullet = new Bullet();
    bullet.addBullet(x, y, rot);
    this.add(bullet);
  }
}
