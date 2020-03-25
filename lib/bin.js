
class Bin {
    constructor(stage, type) {
        this.type = type;
        this.stage = stage;
        this.bin = this.draw(stage);
    }

    draw() {
        if (this.type === 'compost') {
            const compost = new createjs.Bitmap("./assets/images/green_bin.png");
            compost.x = 100;
            compost.y = 300;
            this.stage.addChild(compost);
            return compost;
        } else if (this.type === 'recycle') {
            const recycle = new createjs.Bitmap("./assets/images/blue_bin.png");
            recycle.x = 300;
            recycle.y = 300;
            this.stage.addChild(recycle);
            return recycle;
        } else if (this.type === 'landfill') {
            const landfill = new createjs.Bitmap("./assets/images/black_bin.png");
            landfill.x = 500;
            landfill.y = 300;
            this.stage.addChild(landfill);
            return landfill;
        }
    }
  
  }
  
  export default Bin;
