
class Bin {
    constructor(stage, type) {
        this.type = type;
        this.stage = stage;
        this.bin = this.draw(stage);
    }

    draw() {
        let waste;
        let label;
        
        if (this.type === 'compost') {
            waste = new createjs.Bitmap("./assets/images/green_bin.png");
            waste.x = 100;
            waste.y = 300;

            label =  new createjs.Text("COMPOST", "bold 28px Arial", "#FFFFFF");
            label.textAlign = "left";
            label.textBaseline = "middle";
            label.x = 80;
            label.y = 450;

        } else if (this.type === 'recycle') {
            waste = new createjs.Bitmap("./assets/images/blue_bin.png");
            waste.x = 300;
            waste.y = 300;

            label =  new createjs.Text("RECYCLE", "bold 28px Arial", "#FFFFFF");
            label.textAlign = "left";
            label.textBaseline = "middle";
            label.x = 300;
            label.y = 450

        } else if (this.type === 'landfill') {
            waste = new createjs.Bitmap("./assets/images/black_bin.png");
            waste.x = 520;
            waste.y = 300;

            label =  new createjs.Text("LANDFILL", "bold 28px Arial", "#FFFFFF");
            label.textAlign = "left";
            label.textBaseline = "middle";
            label.x = 500;
            label.y = 450;

        }

        this.stage.addChild(waste, label);

        waste.on("rollover", function(e) {
            this.scaleX = 1.3;
            this.scaleY = 1.3;
            this.y -= 20;
        });

        waste.on("rollout", function(e) {
            this.scaleX = 1;
            this.scaleY = 1;
            this.y += 20;
        });

        return waste;
    }
  
  }
  
  export default Bin;
