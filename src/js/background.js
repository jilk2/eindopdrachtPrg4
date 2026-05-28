import { Engine, Actor, Vector, ImageSource } from "excalibur";

const backgroundImage = new ImageSource("./images/water.jpg");

await backgroundImage.load();

export const background = new Actor({
    pos: new Vector(640, 360),
    width: 1280,
    height: 720,
});

background.graphics.use(backgroundImage.toSprite());

background.z = -1;


