import {
  Actor,
  Engine,
  Vector,
  randomInRange,
  CollisionType,
  randomIntInRange,
} from "excalibur";
import { Resources } from "../resources.js";
import { Soldier } from "./soldier.js";

export class Zombie extends Actor {
  hitpoints;

  constructor() {
    super({ height: 50, width: 50, collisionType: CollisionType.Active });
    this.hitpoints = randomIntInRange(1, 5);
    console.log("I am spawned");
  }

  /**
   * setup for the soldier that the player controlls
   **/

  onInitialize(engine) {
    const zombie = new Actor();
    this.graphics.use(Resources.Zombie.toSprite());
    this.on("collisionstart", (event) => this.attack(event));
    this.pos = new Vector(Math.random() * 1280, Math.random() * 720);

  }

    onPostUpdate(engine){
    const direction = this.scene.playerOne.pos.sub(this.pos).normalize();
    this.rotation = Math.atan2(direction.y, direction.x);
    this.vel = direction.scale(150);
    }
  damage() {
    this.hitpoints -= 4;
    if (this.hitpoints <= 0) {
      this.kill();
    }
  }

  attack(event) {
    const other = event.other.owner;
    if (other instanceof Soldier) {
      other.damage();
    }
  }
}
