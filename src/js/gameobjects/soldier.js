import {
  Actor,
  Engine,
  Keys,
  Vector,
  DisplayMode,
  CollisionType,
  Scene,
} from "excalibur";
import { Resources } from "../resources.js";

export class Soldier extends Actor {
  hitpoints;

  constructor() {
    super({ height: 50, width: 50, collisionType: CollisionType.Active });
    this.hitpoints = 100;
    console.log("I am spawned");
  }

  /**
   * setup for the soldier that the player controlls
   **/

  onInitialize(engine) {
    const soldier = new Actor();
    this.graphics.use(Resources.Soldier.toSprite());
    this.pos = new Vector(600, 400);
  }

  //Movement Code for
  onPreUpdate(engine) {
    let kb = engine.input.keyboard;
    let xspeed = 0;
    let yspeed = 0;
    if (kb.isHeld(Keys.ShiftLeft)) {
      this.speed = 350;
    }

    if (kb.isHeld(Keys.Left) || kb.isHeld(Keys.A)) {
      xspeed -= this.speed;
    }

    if (kb.isHeld(Keys.Right) || kb.isHeld(Keys.D)) {
      xspeed += this.speed;
    }

    if (kb.isHeld(Keys.Up) || kb.isHeld(Keys.W)) {
      yspeed -= this.speed;
    }

    if (kb.isHeld(Keys.Down) || kb.isHeld(Keys.S)) {
      yspeed += this.speed;
    }

    if (kb.wasPressed(Keys.Space)) {
      this.shoot();
    }

    this.vel = new Vector(xspeed, yspeed);
    if (this.vel.x !== 0 || this.vel.y !== 0) {
      this.rotation = Math.atan2(this.vel.y, this.vel.x);
    }

    this.speed = 250;
  }

  damage(engine) {
    this.hitpoints -= 10;
  }

  onPostUpdate(engine) {
    if (this.hitpoints <= 0) {
      this.kill();
      engine.goToScene("game-over");
    }
  }
  shoot() {
    this.scene.spawnBullet(this.pos.x, this.pos.y, this.rotation);
  }
}
