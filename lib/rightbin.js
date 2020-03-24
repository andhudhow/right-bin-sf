import Game from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const stage = new createjs.Stage(canvas);

    createjs.Touch.enable(stage);
    
    const game = new Game(stage);

    createjs.Ticker.addEventListener("tick", stage);
    // stage.enableMouseOver(10);
    // stage.mouseMoveOutside = true;
})