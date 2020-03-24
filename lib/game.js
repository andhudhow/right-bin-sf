import Bin from './bin';
import Waste from './waste';

class Game {
    constructor(stage) {
        this.waste=[];
        this.bins=[];
        this.createBins(stage);
        this.createWaste(stage);
        this.generateWaste(stage);
        createjs.Ticker.framerate = 40;
        createjs.Ticker.addEventListener("tick", ()=>stage.update());
        createjs.Ticker.addEventListener("tick", ()=>console.log("TICK!"));
    }

    createBins(stage) {
        const compost_bin = new Bin(stage, "compost");
        this.bins.push(compost_bin);

        const recycle_bin = new Bin(stage, "recycle")
        this.bins.push(recycle_bin);

        const landfill_bin = new Bin(stage, "landfill");
        this.bins.push(landfill_bin);

        stage.update();
    }

    
    createWaste(stage) {
        let wasteType = ["compost", "recycle", "landfill"][Math.floor(Math.random() * 3)];
        let wasteItem = new Waste(stage, wasteType);
        this.waste.push(wasteItem);
    }

    generateWaste(stage) {
        setInterval(()=>this.createWaste(stage),3000);
    }
}

export default Game;
