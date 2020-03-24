
class Waste {
    constructor(stage, type) {
        this.type = type;
        this.stage = stage;
        this.draw(stage);
    }

    draw() {
        //if compost pick a random number between 1 and 15
        //if recycle pick a random number between 1 and 20
        //if landfill pick a random number between 1 and 11
        if (this.type === 'compost') {
            const rand_img_num = Math.floor(Math.random() * 15);
            const waste = new createjs.Bitmap(`./assets/compost_${rand_img_num}.png`);
            waste.scaleX = 0.2
            waste.scaleY = 0.2
            this.stage.addChild(waste);
        } else if (this.type === 'recycle') {
            const rand_img_num = Math.floor(Math.random() * 20);
            const waste = new createjs.Bitmap(`./assets/recycle_${rand_img_num}.png`);
            waste.scaleX = 0.2
            waste.scaleY = 0.2
            this.stage.addChild(waste);
        } else if (this.type === 'landfill') {
            const rand_img_num = Math.floor(Math.random() * 11);
            const waste = new createjs.Bitmap(`./assets/recycle_${rand_img_num}.png`);
            waste.scaleX = 0.2
            waste.scaleY = 0.2
            this.stage.addChild(waste);
        }
    }
};

export default Waste;