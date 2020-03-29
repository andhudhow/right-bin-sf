
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

            const compost_label =  new createjs.Text("COMPOST", "bold 28px Arial", "#FFFFFF");
            compost_label.textAlign = "left";
            compost_label.textBaseline = "middle";
            compost_label.x = 80;
            compost_label.y = 450;

            this.stage.addChild(compost, compost_label);
            return compost;
        } else if (this.type === 'recycle') {
            const recycle = new createjs.Bitmap("./assets/images/blue_bin.png");
            recycle.x = 300;
            recycle.y = 300;

            const recycle_label =  new createjs.Text("RECYCLE", "bold 28px Arial", "#FFFFFF");
            recycle_label.textAlign = "left";
            recycle_label.textBaseline = "middle";
            recycle_label.x = 300;
            recycle_label.y = 450;

            this.stage.addChild(recycle, recycle_label);
            return recycle;
        } else if (this.type === 'landfill') {
            const landfill = new createjs.Bitmap("./assets/images/black_bin.png");
            landfill.x = 500;
            landfill.y = 300;

            const landfill_label =  new createjs.Text("LANDFILL", "bold 28px Arial", "#FFFFFF");
            landfill_label.textAlign = "left";
            landfill_label.textBaseline = "middle";
            landfill_label.x = 500;
            landfill_label.y = 450;
            
            this.stage.addChild(landfill, landfill_label);
            return landfill;
        }
    }
  
  }
  
  export default Bin;
