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

    onPostUpdate(engine){
        let kb = engine.input.keyboard
        let xspeed = 0
        let yspeed = 0
        if(kb.isHeld(Keys.ShiftLeft)){
            this.speed = 350
        } else {
            this.speed = 150
        }
        if (kb.isHeld(Keys.Left) || kb.isHeld(Keys.A)){
            xspeed -= this.speed
        }

        if (kb.isHeld(Keys.Right) || kb.isHeld(Keys.D)){
            xspeed += this.speed
        }

        if (kb.isHeld(Keys.Up) ||kb.isHeld(Keys.W)){
            yspeed -= this.speed
        }

        if (kb.isHeld(Keys.Down) ||kb.isHeld(Keys.S)){
            yspeed += this.speed
        }

        this.vel = new Vector(xspeed,yspeed)
if (this.vel.x !== 0 || this.vel.y !== 0) {
    // sprite should face right by default; adjust offset if needed
    this.rotation = Math.atan2(this.vel.y, this.vel.x)
}
    }

}