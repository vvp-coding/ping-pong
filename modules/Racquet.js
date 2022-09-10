export default class Racquet {
    constructor(x) {
        this.racquetCanvas = document.getElementById("racquet-canvas");
        this.context = this.racquetCanvas.getContext("2d");

        this.x = 110;
    }

    draw() {
        this.context.reset();
        this.context.fillRect(this.x, 300, 100, 15);
    }

    left() {
        if(this.x - 10 >= 0){
            this.x -= 10;
            this.draw();
        }
    }

    right() {
        if(this.x + 10 <= this.racquetCanvas.clientWidth - 100) {
            this.x += 10;
            this.draw();
        }
    }

} 