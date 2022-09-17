import Ball from "./Ball.js";
import Racquet from "./Racquet.js";

export default class Game {

    constructor() {
        this.ball = new Ball(150, 25);
        this.racquet = new Racquet();

        this.init();
        
        this.ball.draw();
        this.racquet.draw();

        setInterval((ball, angle, speed) => {
            ball.move(angle, speed);
        }, 10, this.ball, Math.random() * 180, 3);

    }

    init() {

        this.racquet.racquetCanvas.setAttribute("width", "600");
        this.racquet.racquetCanvas.setAttribute("height", "350");

        this.ball.ballCanvas.setAttribute("width", "600");
        this.ball.ballCanvas.setAttribute("height", "350");

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
}