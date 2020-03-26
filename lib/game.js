import Bin from './bin';
import Waste from './waste';
import { timerFormatter } from './util';

class Game {
    constructor(stage) {
        this.waste = [];
        this.scoreVal = 0;
        this.timerSecs = 2;
        this.bins = [];
        this.timerVar = {};
        this.generateWasteVar = {};
        this.initialScreen(stage);
        createjs.Ticker.framerate = 60;
        createjs.Sound.registerSound("assets/sounds/correct.mp3", "correct");
        createjs.Sound.registerSound("assets/sounds/incorrect.mp3", "incorrect");
        createjs.Sound.registerSound("assets/sounds/hungboo.mp3", "hungboo");
        createjs.Ticker.addEventListener('tick', stage);
    }

    initialScreen(stage) {
        const intro = new createjs.Text("Click to Play", "bold 50px Arial", "#FFFFFF");
        intro.textAlign = "center";
        intro.textBaseline = "middle";
        intro.x = canvas.width / 2;
        intro.y = canvas.height / 4;
        intro.cursor = "pointer";
        stage.addChild(intro);
        canvas.onclick = () => {
            stage.removeChild(intro);
            this.prePlayInfo(stage);
        }
    }

    prePlayInfo(stage) {
        const info = new createjs.Text("Drag trash to the right bin and earn points!", "bold 30px Arial", "#FFFFFF");
        info.textAlign = "center";
        info.textBaseline = "middle";
        info.x = canvas.width / 2;
        info.y = canvas.height / 6;
        info.pointer = "cursor";

        const start = new createjs.Text("Click anywhere to start game", "bold 28px Arial", "#FFFFFF");
        start.textAlign = "center";
        start.textBaseline = "middle";
        start.x = canvas.width / 2;
        start.y = canvas.height / 4;

        const compost_label =  new createjs.Text("COMPOST", "bold 28px Arial", "#FFFFFF");
        compost_label.textAlign = "left";
        compost_label.textBaseline = "middle";
        compost_label.x = 80;
        compost_label.y = 450;

        const recycle_label =  new createjs.Text("RECYCLE", "bold 28px Arial", "#FFFFFF");
        recycle_label.textAlign = "left";
        recycle_label.textBaseline = "middle";
        recycle_label.x = 300;
        recycle_label.y = 450;

        const landfill_label =  new createjs.Text("LANDFILL", "bold 28px Arial", "#FFFFFF");
        landfill_label.textAlign = "left";
        landfill_label.textBaseline = "middle";
        landfill_label.x = 500;
        landfill_label.y = 450;

        this.createBins(stage);
        stage.addChild(info, start, compost_label, recycle_label, landfill_label);
        
        canvas.onclick = () => {
            canvas.onclick = null;
            stage.removeChild(info, start, compost_label, recycle_label, landfill_label);
            this.startGame(stage);
        }
    }
    
    startGame(stage){
        this.createWaste(stage);
        this.generateWaste(stage);
        this.createScoreboard(stage);
        this.score = this.updateScore(stage);
        this.timer = this.startTimer(stage);
        this.tickTimer(stage);
        createjs.Ticker.addEventListener('tick', ()=>console.log('TICK!'));
        createjs.Ticker.addEventListener('tick', ()=>this.wrapCheck(stage));
        createjs.Ticker.addEventListener('tick', ()=>this.collisionCheck(stage));
        createjs.Ticker.addEventListener('tick', ()=>this.gameOver(stage));
        createjs.Sound.play("hungboo", {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.1} );
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
        this.generateWasteVar = setInterval(()=>this.createWaste(stage),2500);
    }

    collisionCheck(stage) {
        //check if the trash has collided with a bin
        //if it's collided with the right bin type, accrue points
        //if it's collided with the wrong bin type, lose points

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
        score.textAlign = "right";
        score.textBaseline = "middle";
        score.x = canvas.width - 20;
        score.y = canvas.height - 100;
        stage.addChild(score);
    }

    updateScore(stage) {
        stage.removeChild(this.score);
        const score = new createjs.Text(`${this.scoreVal}`, "bold 100px Arial", "#FFFFFF");
        score.textAlign = "right";
        score.textBaseline = "middle";
        score.x = canvas.width - 15;
        score.y = canvas.height - 40;
        stage.addChild(score);
        this.score = score;
        return score;
    }

    startTimer(stage) {
        stage.removeChild(this.timer);
        const timer = new createjs.Text(`${timerFormatter(this.timerSecs)}`, "40px Arial", "#FFFFFF");
        timer.textAlign = "right";
        timer.textBaseline = "middle";
        timer.x = 120
        timer.y = canvas.height - 20;
        stage.addChild(timer);
        this.timer = timer;
        return timer;
    }

    tickTimer(stage) {
        this.timerVar = setInterval(() => {
            this.timerSecs -= 1;
            this.startTimer(stage);
        }, 1000);
    }

    gameOver(stage) {
        if (this.timerSecs === 0) {
            clearInterval(this.timerVar);
            clearInterval(this.generateWasteVar);
            debugger
            this.waste.forEach(waste => stage.removeChild(waste.waste), this);
        };
    }
}

export default Game;
