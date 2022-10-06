import Wall from "./Wall.js";
import { Angle } from "./Trig.js";
export default class Ball {
    constructor(x, y, game) {
        this.x = x;
        this.y = y;
        this.game = game;

        this.properties = this.setProps();

        this.ballCanvas = document.getElementById("ball-canvas");
        this.context = this.ballCanvas.getContext("2d");
    }

    setProps() {
        return {
            radius: 10
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.ballCanvas.clientWidth, this.ballCanvas.clientHeight);
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.properties.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    move(angle, speed) {
        let dy = 0;
        let dx = 0;

        if (Math.abs(angle) > 180) {
            throw Error("Angle must be between -180 and 180!");
        }

        if(angle == 180 || angle == 90) {
            angle--;
        } else if (angle == -180 || angle == -90) {
            angle++;
        }
        
        if(angle > -90 && angle < 90) {
            dy = Math.cos(Angle.toRad(angle)) * speed;
            dx = Math.sin(Angle.toRad(angle)) * speed;

        } else {
            dy = -(Math.cos(Angle.toRad(angle)) * speed);
            dx = Math.sin(Angle.toRad(angle)) * speed;

        }

        const message = {x: this.x + dx, y: this.y + dy, object: "Ball"};
        this.game.update(message);

        this.y += dy;
        this.x += dx;
        this.angle = angle;
        this.speed = speed;

        this.draw();
    }
    
    bounce(obj) {

        if(obj) {
            // ball bouncing from an object:
            if(obj instanceof Wall) {
                if(obj.position === "left") {
                    this.angle = 90 - Math.abs(this.angle);
                } else if(obj.position === "right") {
                    this.angle = -(90 - this.angle);
                }
            }
    
            return setInterval((ball, angle, speed) => {
                ball.move(angle, speed);
            }, 10, this, this.angle, 3);
        }

        // otherwise, just start moving in a random direction 
        const angle = Math.random() * 70;
        // lets also randomly pick a sign for it as well:
        const sign = Math.sign(Math.cos(Math.random() * Math.PI));

        return setInterval((ball, angle, speed) => {
            ball.move(angle, speed);
        }, 10, this, sign * angle, 3);
        
    }

} 