import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources } from '../resources.js'

export class Soldier extends Actor {
    hitpoints

    constructor(){
        console.log("I am spawned")
    }

    /**
     * setup for the soldier that the player controlls
     **/
    
    onInitialize(engine){
        const soldier = new Actor()
        this.graphics.use(Resources.Soldier.toSprite())
        this.pos = new Vector(600,400)
    }
}