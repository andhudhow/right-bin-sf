document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const stage = new createjs.Stage(canvas);
    createjs.Touch.enable(stage);
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true;

    stage.update();

    createjs.Ticker.addEventListener("tick", stage);
})