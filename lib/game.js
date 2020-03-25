import Bin from './bin';
import Waste from './waste';

class Game {
    constructor(stage) {
        this.waste = [];
        this.scoreVal = 0;
        this.score = this.updateScore(stage);
        this.bins = [];
        this.createBins(stage);
        this.createWaste(stage);
        this.generateWaste(stage);
        createjs.Ticker.framerate = 40;
        this.createScoreboard(stage);
        //Refactor all of this into a tick handler
        createjs.Sound.registerSound("assets/images/sounds/correct.mp3", "correct");
        createjs.Sound.registerSound("assets/images/sounds/incorrect.mp3", "incorrect");
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
                const binXBorderRight = bin.bin.x + (binWidth / 3);
                const binYBorderTop = bin.bin.y - (binHeight / 3);

                //if the waste center is between the bin's X axis borders
                //and the bottom 1/3rd of waste is beyond the top border of bin
                if ((wasteX > binXBorderLeft && wasteX < binXBorderRight) &&
                    bottomWasteBorder > binYBorderTop) {
                        debugger
                        if (waste.type === bin.type) {
                            stage.removeChild(waste.waste);
                            this.waste.splice(idx, 1);
                            createjs.Sound.play("correct");
                            this.scoreVal += 10;
                            this.updateScore(stage);
                        } else {
                            stage.removeChild(waste.waste);
                            this.waste.splice(idx, 1);
                            createjs.Sound.play("incorrect");
                            this.scoreVal -= 10;
                            this.updateScore(stage);
                        };
                    }

            }, this)
        }, this )

    }

    wrapCheck(stage) {
        //if any waste items exceed canvas boundaires, remove from
        //stage and array

        this.waste.forEach((waste, idx) => {
            if (waste.waste.x + (waste.waste.image.width * waste.waste.scaleX / 2) > stage.canvas.width) {
                stage.removeChild(waste.waste);
                this.waste.splice(idx, 1);
                createjs.Sound.play("incorrect");
                this.scoreVal -= 10;
                this.updateScore(stage);
            }
        })
    }

    createScoreboard(stage) {
        const score = new createjs.Text("SCORE", "bold 24px Arial", "#FFFFFF");
        score.textAlign = "center";
        score.textBaseline = "middle";
        score.x = canvas.width - 150;
        score.y = canvas.height - 20;
        stage.addChild(score);
    }

    updateScore(stage) {
        stage.removeChild(this.score);
        const score = new createjs.Text(`${this.scoreVal}`, "bold 100px Arial", "#FFFFFF");
        score.textAlign = "center";
        score.textBaseline = "middle";
        score.x = canvas.width - 75;
        score.y = canvas.height - 40;
        stage.addChild(score);
        this.score = score;
        return score;
    }
}

export default Game;
