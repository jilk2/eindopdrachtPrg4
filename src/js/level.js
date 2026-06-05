import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources } from './resources.js'
import { background } from "./background.js"
import { Soldier } from './gameobjects/soldier.js'
import { Bullet } from './gameobjects/bullet.js'
import { Zombie } from "./gameobjects/zombie.js"

export class Level extends Scene{
    
    onInitialize(engine) {
        console.log("this level is created only once.")
        this.add(background);
        console.log('Starting Game');


        this.playerOne = new Soldier(200, 200, "1")
        this.add(this.playerOne);

        this.zombie = new Zombie()
        this.add(this.zombie)

        // this.playerOne.events.on("exitviewport", (e) => this.keepInScreen(e));
        // this.ui = new UI()
        // this.add(this.ui)
    }

onPreUpdate(engine) {
  if (!this.playerOne || !this.zombie) return;
  const direction = this.playerOne.pos.sub(this.zombie.pos).normalize();
  this.zombie.rotation = Math.atan2(direction.y, direction.x);
  this.zombie.vel = direction.scale(150);
}

    spawnBullet(x,y,rot){
    const b = new Bullet()
    b.addBullet(x,y,rot)
    this.add(b)
}

}
