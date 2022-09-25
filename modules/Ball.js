export default class Ball {
    constructor(x, y, game) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.game = game;

        this.ballCanvas = document.getElementById("ball-canvas");
        this.context = this.ballCanvas.getContext("2d");
    }

    draw() {
        this.context.clearRect(0, 0, this.ballCanvas.clientWidth, this.ballCanvas.clientHeight);
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
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
            dy = Math.cos(angle) * speed;
            dx = Math.sin(angle) * speed;

        } else {
            dy = -(Math.cos(angle) * speed);
            dx = Math.sin(angle) * speed;

        }

        const message = {x: this.x + dx, y: this.y + dy, object: "Ball"};
        this.game.update(message);

        this.y += dy;
        this.x += dx;

        this.draw();
    }
    
} 