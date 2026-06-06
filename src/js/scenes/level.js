import { Actor, Engine, Vector, Scene, Timer } from "excalibur"
import { Resources } from '../resources.js'
import { Background } from "../background.js"
import { Soldier } from '../gameobjects/soldier.js'
import { Bullet } from '../gameobjects/bullet.js'
import { Zombie } from "../gameobjects/zombie.js"

export class Level extends Scene{

    
    onInitialize(engine) {
        console.log("this level is created only once.")
        const background = new Background(Resources.Background)
        this.add(background);
        console.log('Starting Game');


        this.playerOne = new Soldier(200, 200, "1")
        this.add(this.playerOne);

        this.spawnZombies()

        // this.playerOne.events.on("exitviewport", (e) => this.keepInScreen(e));
        // this.ui = new UI()
        // this.add(this.ui)
    this.zombieTimer = new Timer({
      fcn: () => {
        this.spawnZombies()
      },
      repeats: true,
      interval: 5000
    })
    this.add(this.zombieTimer)
    this.zombieTimer.start()
    }
    
spawnZombies(){
    for (let index = 0; index < 5; index++) {
        this.zombie = new Zombie()
        this.add(this.zombie)
    }
}


    spawnBullet(x,y,rot){
    const b = new Bullet()
    b.addBullet(x,y,rot)
    this.add(b)
}

}
