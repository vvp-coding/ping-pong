import Ball from "./Ball.js";
import Racquet from "./Racquet.js";

export default class Game {

    constructor() {
        this.ball = new Ball(150, 25, this);
        this.racquet = new Racquet(110, 300, this);

        this.init();
        
        this.ball.draw();
        this.racquet.draw();

        this.ballTimer = setInterval((ball, angle, speed) => {
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

    update({ x, y, object }) {
        if(object == "Ball") {
            if(x > this.ball.ballCanvas.width - this.ball.radius || x < 0 + this.ball.radius || 
                y > this.ball.ballCanvas.height - this.ball.radius || y < 0 + this.ball.radius) {
                clearInterval(this.ballTimer);
            }

            const intersectionCoords = this.getLineIntersection(this.racquet.x, this.racquet.y, this.racquet.x + this.racquet.properties.width, this.racquet.y,
                this.ball.x, this.ball.y, x, y);

            if(intersectionCoords) {
                clearInterval(this.ballTimer);
            }

        }
    }

    getLineIntersection(p0_x, p0_y, p1_x, p1_y, p2_x, p2_y, p3_x, p3_y) { 
        let s1_x, s1_y, s2_x, s2_y; 
        s1_x = p1_x - p0_x; 
        s1_y = p1_y - p0_y; 
        s2_x = p3_x - p2_x; 
        s2_y = p3_y - p2_y; 
        
        let s, t; 
        s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y); 
        t = ( s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y); 
        
        if (s >= 0 && s <= 1 && t >= 0 && t <= 1) { 
        // Collision detected 
          let intX = p0_x + (t * s1_x); 
          let intY = p0_y + (t * s1_y); 
          return [intX, intY];
        } 
        
        return null; 
    }

}