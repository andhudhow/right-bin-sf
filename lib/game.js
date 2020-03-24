import Bin from './bin';
import Waste from './waste';

class Game {
    constructor(stage) {
        this.landfill = [];
        this.recycle = [];
        this.compost=[];
        this.bins=[];
        this.createBins(stage);
        this.createWaste(stage);
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
        for (let i = 0; i < 10; i++) {
            let compostWaste = new Waste(stage, "compost");
            this.compost.push(compostWaste);
            
            let recycleWaste = new Waste(stage, "recycle");
            this.recycle.push(recycleWaste);

            let landFillWaste = new Waste(stage, "landfill");
            this.landfill.push(landFillWaste);
        }
    }
}

export default Game;
