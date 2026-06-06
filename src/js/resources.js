import { ImageSource, Sound, Resource, Loader } from 'excalibur'


const Resources = {
    Background: new ImageSource("images/water.jpg"),
    Soldier: new ImageSource("images/soldier.png"),
    Bullet: new ImageSource("images/bullet.png"),
    Zombie: new ImageSource("images/zombie.png"),
    Gun: new ImageSource("images/weapon_gun.png")
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }