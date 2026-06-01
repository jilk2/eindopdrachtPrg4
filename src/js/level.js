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

        // this.playerOne.events.on("exitviewport", (e) => this.keepInScreen(e));
        // this.ui = new UI()
        // this.add(this.ui)
    }

    // keepInScreen(e){
    //     if(e.target.pos > 1280){
    //         e.target.pos = new Vector (620, 200)
    //         console.log("hello")
    //     } else {
    //         e.target.pos = new Vector (this.pos += 1280, this.pos.y)
    //     }
    // }

}
