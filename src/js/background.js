import { Engine, Actor, Vector, ImageSource, Sprite } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    sprite
    background

    constructor(image){
        super()
        this.background = image
    }
    onInitialize(engine){
        this.sprite = new Sprite({
            image: this.background
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }
}

