
class Bin {
    constructor(stage, type) {
        this.type = type;
        this.stage = stage;
        this.draw(stage);
    }

    draw() {
        if (this.type === 'compost') {
            const compost = new createjs.Bitmap("./assets/green_bin.png");
            compost.x = 100;
            compost.y = 300;
            this.stage.addChild(compost);
        } else if (this.type === 'recycle') {
            const recycle = new createjs.Bitmap("./assets/blue_bin.png");
            recycle.x = 300;
            recycle.y = 300;
            this.stage.addChild(recycle);
        } else if (this.type === 'landfill') {
            const landfill = new createjs.Bitmap("./assets/black_bin.png");
            landfill.x = 500;
            landfill.y = 300;
            this.stage.addChild(landfill);
        }
    }
  
  }
  
  export default Bin;
