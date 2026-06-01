import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources } from '../resources.js'

export class Bullet extends Actor{

    constructor(){
        super()
    }

    onInitialize(engine){
        this.graphics.use(Resource.Bullet.toSprite())
    }

    addBullet(x,y){
        const bullet = new bullet()
        this.add()
        this.pos = new Vector(x,y)
    }
}