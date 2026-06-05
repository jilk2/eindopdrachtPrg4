import { Actor, Engine, Vector, randomInRange, CollisionType} from "excalibur"
import { Resources } from '../resources.js'
import { Soldier } from "./soldier.js"


export class Zombie extends Actor {

    constructor() {
        super({ height:50, width: 50,collisionType: CollisionType.Active })
        console.log("I am spawned")
    }

    /**
     * setup for the soldier that the player controlls
     **/

    onInitialize(engine) {
        const zombie = new Actor()
        this.graphics.use(Resources.Zombie.toSprite())
        this.on('collisionstart', (event) => this.attack(event))
        this.pos = new Vector(Math.random() * 1280, Math.random() * 720)
    }

attack(event) {
  const other = event.other.owner
  if (other instanceof Soldier) {
    other.damage()
  }
}
}