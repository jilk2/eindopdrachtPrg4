import { Actor, FontUnit, Keys, Label, ScreenElement, Vector, Font, Color} from 'excalibur'
import { Resources } from '../resources.js'

export class UI extends ScreenElement {
    constructor(){
        super()
    }

    onInitialize(engine){
        this.labelOne = new Label({
            text: "P1: 0",
            pos: new Vector(100,100),
            font: new Font({
                family: 'Helvetica',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
            this.addChild(this.labelOne)
    }

    updatePlayerOne(score){
        this.labelOne.text = `p1: ${score}`
    }

    
}