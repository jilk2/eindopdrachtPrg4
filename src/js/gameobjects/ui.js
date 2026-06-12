import { Actor, FontUnit, Keys, Label, ScreenElement, Vector, Font, Color} from 'excalibur'
import { Resources } from '../resources.js'

export class UI extends ScreenElement {
    constructor(){
        super()
    }

    onInitialize(engine){
        this.labelScore = new Label({
            text: "Score: 0",
            pos: new Vector(900,50),
            font: new Font({
                family: 'Helvetica',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
            this.addChild(this.labelScore)

        this.labelHealth = new Label({
            text: "health: 100",
            pos: new Vector(100,50),
            font: new Font({
                family: 'Helvetica',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
            this.addChild(this.labelHealth)
    }

    updateScore(score){
        this.labelScore.text = `Score: ${score}`
    }

    updateHealth(hitpoints){
        this.labelHealth.text = `health: ${hitpoints}`
    }


    

    
}