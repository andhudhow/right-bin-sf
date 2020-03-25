import Bin from './bin';
import Waste from './waste';

class Game {
    constructor(stage) {
        this.waste = [];
        this.compost = {};
        this.landfill = {};
        this.recycle = {};
        this.createBins(stage);
        this.createWaste(stage);
        this.generateWaste(stage);
        createjs.Ticker.framerate = 40;
        createjs.Ticker.addEventListener("tick", ()=>stage.update());
        createjs.Ticker.addEventListener("tick", ()=>console.log("TICK!"));
        createjs.Ticker.addEventListener("tick", ()=>this.wrapCheck(stage));
    }

    createBins(stage) {
        const compost_bin = new Bin(stage, "compost");
        this.compost = compost_bin

        const recycle_bin = new Bin(stage, "recycle")
        this.recycle = recycle_bin;

        const landfill_bin = new Bin(stage, "landfill");
        this.landfill = landfill_bin;
    }

    
    createWaste(stage) {
        let wasteType = ["compost", "recycle", "recycle", "landfill"][Math.floor(Math.random() * 4)];
        let wasteItem = new Waste(stage, wasteType);
        this.waste.push(wasteItem);
    }

    generateWaste(stage) {
        setInterval(()=>this.createWaste(stage),3000);
    }

    collisionCheck(stage) {
        //check if the trash has collided with a bin
        //if it's collided
        //if it 's collided with the right bin

    }

    wrapCheck(stage) {
        //check if any of the trash has left the screen in which case
        //remove it from the array
        debugger
        this.waste.forEach((waste, idx) => {
            if (waste.waste.x + (waste.waste.image.width * waste.waste.scaleX / 2) > stage.canvas.width) {
                stage.removeChild(waste.waste);
                this.waste.splice(idx, 1);
            }
        })
    }
}

export default Game;
