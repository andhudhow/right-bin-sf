import Game from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    canvas.cache;
    
    const stage = new createjs.Stage(canvas);

    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stage);
    
    // enabled mouse over / out events
    stage.enableMouseOver(10);
    
    // keep tracking the mouse even when it leaves the canvas
	stage.mouseMoveOutside = true;
    
    const game = new Game(stage, canvas);
})