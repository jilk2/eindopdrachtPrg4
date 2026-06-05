import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources } from '../resources.js'

export class Bullet extends Actor{
    speed = 400
    amount = 10
    constructor(x,y, playerRotation){
        super({x,y, width:10, height:10})
        this.events.on("exitviewport", () => this.kill())

    }

    onInitialize(engine){
        this.graphics.use(Resources.Bullet.toSprite())
    }

addBullet(x,y, playerRotation) {
    this.pos.x = x
    this.pos.y = y
    this.vel = new Vector(Math.cos(playerRotation)*this.speed, Math.sin(playerRotation)*this.speed)
    this.rotation = playerRotation + Math.PI/2
}
}