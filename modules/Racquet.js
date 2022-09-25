export default class Racquet {
    constructor(x, y, game) {
        this.x = x;
        this.y = y;
        this.game = game;
        this.properties = this.setProps();

        this.racquetCanvas = document.getElementById("racquet-canvas");
        this.context = this.racquetCanvas.getContext("2d");
    }

    setProps() {
        return {width: 100, height: 15};
    }

    draw() {
        this.context.reset();
        this.context.fillRect(this.x, this.y, this.properties.width, this.properties.height);
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
            this.game.update({x: this.x, y: this.y, object: "Racquet"});
            this.draw();
        }
    }

} 