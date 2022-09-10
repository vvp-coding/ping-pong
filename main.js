import Game from "./modules/Game.js";

const root = document.getElementById("root");

// TODO: create these guys inside Game class
    const ballCanvas = document.createElement("canvas");
    const racquetCanvas = document.createElement("canvas");

    ballCanvas.setAttribute("id", "ball-canvas");
    racquetCanvas.setAttribute("id", "racquet-canvas");

    root.appendChild(ballCanvas);
    root.appendChild(racquetCanvas);

const game = new Game(root);
game.check();