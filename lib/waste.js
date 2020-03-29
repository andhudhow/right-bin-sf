
class Waste {
    constructor(stage, type) {
        this.type = type;
        this.stage = stage;
        this.waste = this.draw(stage);
    }
    
    randomPosition() {

    }

    draw() {
        //if compost pick a random number between 1 and 15
        //if recycle pick a random number between 1 and 20
        //if landfill pick a random number between 1 and 11
        let waste

        if (this.type === 'compost') {
            const rand_img_num = Math.floor(Math.random() * 15);
            waste = new createjs.Bitmap(`./assets/images/compost_${rand_img_num}.png`);
        } else if (this.type === 'recycle') {
            const rand_img_num = Math.floor(Math.random() * 20);
            waste = new createjs.Bitmap(`./assets/images/recycle_${rand_img_num}.png`);
        } else if (this.type === 'landfill') {
            const rand_img_num = Math.floor(Math.random() * 10);
            waste = new createjs.Bitmap(`./assets/images/landfill_${rand_img_num}.png`);
        }
        waste.x = -200;
        waste.scaleX = 0.25;
        waste.scaleY = 0.25;

        waste.width = waste.image.width * waste.scaleX;
        waste.height = waste.image.height * waste.scaleY;
        
        waste.cursor = "pointer";

        waste.on("mousedown", function (e) {
			this.stage.addChild(this);
            this.offset = {x: this.x - e.stageX, y: this.y - e.stageY};
		});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		waste.on("pressmove", function (e) {
			this.x = e.stageX + this.offset.x;
            this.y = e.stageY + this.offset.y;
		});

        // waste.on("pressup", function (e) {
        //     this.releaseY = this.y;
        //     this.releaseX = this.y;
		// });


        // waste.on("rollover", function(e) {
        //     this.scaleX = 0.3;
        //     this.scaleY = 0.3;
        // });

        // waste.on("rollout", function(e) {
        //     this.scaleX = 0.25;
        //     this.scaleY = 0.25;
        // });
        
        waste.on("tick", () => waste.x += 2)
        this.stage.addChild(waste);
        return waste;
    }
}; 

export default Waste;