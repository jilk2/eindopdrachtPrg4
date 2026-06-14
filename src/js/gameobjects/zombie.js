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
  speed;

  constructor() {
    super({ height: 50, width: 50, collisionType: CollisionType.Active });
    this.hitpoints = 5;
    this.speed = randomInRange(150, 280);
    console.log("I am spawned");
  }

  onInitialize(engine) {
    const zombie = new Actor();
    this.graphics.use(Resources.Zombie.toSprite());
    this.on("collisionstart", (event) => this.attack(event));
    const viewW = engine.drawWidth;
    const viewH = engine.drawHeight;
    const margin = 150;
    const center =
      this.scene?.camera?.pos ??
      this.scene?.playerOne?.pos ??
      new Vector(viewW / 2, viewH / 2);

    let x = center.x - viewW / 2 + Math.random() * viewW;
    let y = center.y - viewH / 2 + Math.random() * viewH;

    const left = center.x - viewW / 2 - margin;
    const right = center.x + viewW / 2 + margin;
    const top = center.y - viewH / 2 - margin;
    const bottom = center.y + viewH / 2 + margin;

    if (!(x < left || x > right || y < top || y > bottom)) {
      if (Math.random() < 0.5) {
        x =
          Math.random() < 0.5
            ? left - Math.random() * 300
            : right + Math.random() * 300;
      } else {
        y =
          Math.random() < 0.5
            ? top - Math.random() * 300
            : bottom + Math.random() * 300;
      }
    }

    this.pos = new Vector(x, y);
  }

  onPostUpdate(engine) {
    const direction = this.scene.playerOne.pos.sub(this.pos).normalize();
    this.rotation = Math.atan2(direction.y, direction.x);
    this.vel = direction.scale(this.speed);
  }

  takeDamage() {
    this.hitpoints -= 5;
    if (this.hitpoints <= 0) {
      this.kill();
    }
  }

  attack(event) {
    const other = event.other.owner;
    if (other instanceof Soldier) {
      other.takeDamage();
      this.scene.ui.updateHealth(this.scene.playerOne.hitpoints);
      this.kill();
    }
  }
}
