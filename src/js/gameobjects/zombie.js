import { Actor, Engine, Vector, randomInRange } from "excalibur"
import { Resources } from '../resources.js'


export class Zombie extends Actor {

    constructor() {
        super()
        console.log("I am spawned")
    }

    /**
     * setup for the soldier that the player controlls
     **/

    onInitialize(engine) {
        const zombie = new Actor()
        this.graphics.use(Resources.Zombie.toSprite())
        this.pos = new Vector(Math.random() * 1280, Math.random() * 720)
    }

    //Movement Code for 
    // onPreUpdate(engine) {
    // }
}