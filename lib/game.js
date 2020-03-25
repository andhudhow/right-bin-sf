import Bin from './bin';
import Waste from './waste';

class Game {
    constructor(stage) {
        this.waste = [];
        // this.compost = {};
        // this.landfill = {};
        // this.recycle = {};
        this.bins = [];
        this.createBins(stage);
        this.createWaste(stage);
        this.generateWaste(stage);
        createjs.Ticker.framerate = 40;
        //Refactor all of this into a tick handler
        createjs.Ticker.addEventListener('tick', ()=>stage.update());
        createjs.Ticker.addEventListener('tick', ()=>console.log('TICK!'));
        createjs.Ticker.addEventListener('tick', ()=>this.wrapCheck(stage));
        createjs.Ticker.addEventListener('tick', ()=>this.collisionCheck(stage));
    }

    createBins(stage) {
        const compost_bin = new Bin(stage, 'compost');
        this.bins.push(compost_bin)

        const recycle_bin = new Bin(stage, 'recycle')
        this.bins.push(recycle_bin);

        const landfill_bin = new Bin(stage, 'landfill');
        this.bins.push(landfill_bin);
    }

    
    createWaste(stage) {
        let wasteType = ['compost', 'recycle', 'recycle', 'landfill'][Math.floor(Math.random() * 4)];
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

        this.waste.forEach((waste, idx) => {
            const wasteHeight = waste.waste.image.height * waste.waste.scaleY;
            const bottomWasteBorder = waste.waste.y + (wasteHeight / 3);
            this.bins.forEach(bin => {
                //go about 1/3 of the way into the waste item
                const wasteX = waste.waste.x;
                const binWidth = bin.bin.image.width;
                const binHeight = bin.bin.image.height;
                const binXBorderLeft = bin.bin.x - (binWidth / 2);
                const binXBorderRight = bin.bin.x + (binWidth / 2);
                const binYBorderTop = bin.bin.y - (binHeight / 2);

                //if the waste center is between the bin's X axis borders
                //and the bottom 1/3rd of waste is beyond the top border of bin
                if ((wasteX > binXBorderLeft && wasteX < binXBorderRight) &&
                    bottomWasteBorder > binYBorderTop) {
                        stage.removeChild(waste.waste);
                    }

            })
        },this)

    }

    wrapCheck(stage) {
        //if any waste items exceed canvas boundaires, remove from
        //stage and array

        this.waste.forEach((waste, idx) => {
            if (waste.waste.x + (waste.waste.image.width * waste.waste.scaleX / 4) > stage.canvas.width) {
                stage.removeChild(waste.waste);
                this.waste.splice(idx, 1);
            }
        })
    }
}

export default Game;
