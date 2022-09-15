export default class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.ballCanvas = document.getElementById("ball-canvas");
        this.context = this.ballCanvas.getContext("2d");

        setInterval((ball) => {
            ball.move();
        }, 10, this);
    }

    draw() {
        this.context.clearRect(0, 0, this.ballCanvas.clientWidth, this.ballCanvas.clientHeight);
        this.context.beginPath();
        this.context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    move() {
        let dy = 2;
        this.y += dy;

        this.draw();
    }
    
} 