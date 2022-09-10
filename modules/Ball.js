export default class Ball {
    constructor() {
        this.ballCanvas = document.getElementById("ball-canvas");
        this.context = this.ballCanvas.getContext("2d");
        this.draw();
    }

    draw() {
        this.context.arc(150, 25, 10, 0, 2 * Math.PI);
        this.context.fill();
    }
} 