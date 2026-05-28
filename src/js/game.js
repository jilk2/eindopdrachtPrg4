import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Soldier } from './gameobjects/soldier.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const soldier = new Soldier()
        this.add(soldier);
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

new Game()
