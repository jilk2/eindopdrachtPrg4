import { Actor, Engine, Vector, Scene, CollisionType } from "excalibur";
import { Resources } from "../resources.js";
import { Zombie } from "./zombie.js";

export class Bullet extends Actor {
  speed = 400;
  amount = 10;
  constructor(x, y, playerRotation) {
    super({
      x,
      y,
      width: 10,
      height: 10,
      collisionType: CollisionType.Passive,
    });
    this.events.on("exitviewport", () => this.kill());
    this.events.on("collisionstart", this.attack.bind(this));
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Bullet.toSprite());
  }

  addBullet(x, y, playerRotation) {
    this.pos.x = x;
    this.pos.y = y;
    this.vel = new Vector(
      Math.cos(playerRotation) * this.speed,
      Math.sin(playerRotation) * this.speed,
    );
    this.rotation = playerRotation + Math.PI / 2;
  }

  attack(event) {
    const other = event.other.owner;
    if (other instanceof Zombie) {
      console.log("I hit a zombie");
      other.takeDamage();
      this.kill();
      this.scene.score += 10;
      console.log(this.scene.score);
      this.scene.ui.updateScore(this.scene.score);
    }
  }
}
