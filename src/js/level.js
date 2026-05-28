import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources } from './resources.js'
import { background } from "./background.js"
import { Soldier } from './gameobjects/soldier.js'

export class Level extends Scene{
    
    onInitialize(engine) {
        console.log("this level is created only once.")
        this.add(background);
        console.log('Starting Game');


        this.playerOne = new Soldier(200, 200, "1")
        this.add(this.playerOne);

        // this.ui = new UI()
        // this.add(this.ui)
    }

    keepInScreen(soldier){
        if(soldier.pos > 1280){
            soldier.pos = new Vector (this.pos.x -= 1280, this.pos.y)
        } else {
            soldier.pos = new Vector (this.pos.x += 1280, this.pos.y)
        }

        if(soldier.pos > 1280){
            soldier.pos -= 1280
        } else {
            solider.pos += 1280
        }
    }

}
