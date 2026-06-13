import { ImageSource, Sound, Resource, Loader } from "excalibur";

const Resources = {
  Background: new ImageSource("images/cabin-in-woods.png"),
  Tutorial: new ImageSource("images/tutorial.png"),
  Gameover: new ImageSource("images/gameover.png"),
  Soldier: new ImageSource("images/player.png"),
  Bullet: new ImageSource("images/bullet.png"),
  Zombie: new ImageSource("images/zombie.png"),
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
