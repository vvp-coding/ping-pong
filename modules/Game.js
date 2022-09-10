import Ball from "./Ball.js";
import Racquet from "./Racquet.js";

export default class Game {

    constructor() {
        this.ball = new Ball();
        this.racquet = new Racquet();

        window.addEventListener("keydown", (event) => {
            if (event.code === "ArrowLeft") {
                this.racquet.left();

            } else if(event.code === "ArrowRight"){
                this.racquet.right();

            } else if(event.code === "Escape"){
                console.log('stop');

            } else if(event.code === "Space"){
                console.log('pause');

            }
        });

    }

    check() {
        console.log("It worked!")
    }
}