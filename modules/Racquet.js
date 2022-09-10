export default class Racquet {
    constructor(x) {
        this.racquetCanvas = document.getElementById("racquet-canvas");
        this.context = this.racquetCanvas.getContext("2d");
        this.x = 110;
        this.draw();
    }

    draw() {
        this.context.fillRect(this.x, 120, 100, 15);
    }

    left() {
        this.x -= 10;
        this.context.reset();
        this.draw();
    }

    right() {
        this.x += 10;
        this.context.reset();
        this.draw();
    }

} 