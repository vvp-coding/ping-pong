export default class Racquet {
    constructor(x, game) {
        this.game = game;

        this.racquetCanvas = document.getElementById("racquet-canvas");
        this.context = this.racquetCanvas.getContext("2d");

        this.x = x;
    }

    draw() {
        this.context.reset();
        this.context.fillRect(this.x, 300, 100, 15);
    }

    left() {
        if(this.x - 10 >= 0){
            this.x -= 10;  
            this.game.update({x: this.x})
            this.draw();
        }
    }

    right() {
        if(this.x + 10 <= this.racquetCanvas.clientWidth - 100) {
            this.x += 10;
            this.game.update({x: this.x})
            this.draw();
        }
    }

} 