import Bin from './bin';
import Waste from './waste';
import { timerFormatter } from './util';

class Game {
    constructor(stage) {
        this.stage = stage;
        this.waste = [];
        this.bins = [];
        this.scoreVal = 0;

        this.timerSecs = 60;
        this.timerVar = {};
        this.generateWasteVar = {};
        this.muted = false;

        this.createScoreboard();
        this.score = this.updateScore();

        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener('tick', stage);
        this.initializeSounds();
        this.initialScreen();
    }

    initializeSounds() {
        this.soundOnButton = new createjs.Bitmap("./assets/images/volume_on.png");
        this.soundOffButton = new createjs.Bitmap("./assets/images/mute.png");
        this.soundOnButton.x = 350;
        this.soundOnButton.y = 460;
        this.soundOnButton.scaleX = .75
        this.soundOnButton.scaleY = .75
        this.soundOffButton.x = 350;
        this.soundOffButton.y = 465;
        this.soundOffButton.scaleX = .6
        this.soundOffButton.scaleY = .6
        this.soundOnButton.addEventListener('click',()=>this.toggleSound(this.stage));
        this.soundOffButton.addEventListener('click',()=>this.toggleSound(this.stage));
        createjs.Sound.registerSound("assets/sounds/correct.mp3", "correct");
        createjs.Sound.registerSound("assets/sounds/incorrect.mp3", "incorrect");
        createjs.Sound.registerSound("assets/sounds/hungboo.mp3", "hungboo");
    }

    initialScreen() {
        createjs.Ticker.addEventListener('tick', this.stage);
        const intro = new createjs.Text("Click to Play", "bold 50px Arial", "#FFFFFF");
        intro.textAlign = "center";
        intro.textBaseline = "middle";
        intro.x = canvas.width / 2;
        intro.y = canvas.height / 8;
        intro.cursor = "pointer";

        this.stage.addChild(intro, this.volButton, this.soundOnButton);
        
        canvas.onclick = () => {
            this.stage.removeChild(intro);
            this.prePlayInfo(this.stage);
        }
    }

    prePlayInfo() {
        const info = new createjs.Text("Drag trash to the right bin and earn points!", "bold 30px Arial", "#FFFFFF");
        info.textAlign = "center";
        info.textBaseline = "middle";
        info.x = canvas.width / 2;
        info.y = canvas.height / 8;
        info.pointer = "cursor";

        const start = new createjs.Text("Click anywhere to start game", "bold 28px Arial", "#FFFFFF");
        start.textAlign = "center";
        start.textBaseline = "middle";
        start.x = canvas.width / 2;
        start.y = info.y + 40;

        this.createBins(this.stage);

        this.stage.addChild(info, start);
        
        canvas.onclick = () => {
            canvas.onclick = null;
            this.stage.removeChild(info, start);
            this.startGame(this.stage);
        }
    }
    
    startGame(){
        this.createWaste();
        this.generateWaste();
        this.createScoreboard();
        this.timer = this.startTimer();
        this.tickTimer();
        createjs.Ticker.addEventListener('tick', ()=>this.wrapCheck());
        createjs.Ticker.addEventListener('tick', ()=>this.collisionCheck());
        createjs.Ticker.addEventListener('tick', ()=>this.gameOver());
        createjs.Sound.play("hungboo", {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.1} );
    }
    
    createBins() {
        ['compost', 'recycle', 'landfill'].forEach(binType => {
            let bin = new Bin(this.stage, binType);
            this.bins.push(bin);
        })
    }

    createWaste() {
        let wasteType = ['compost', 'recycle', 'recycle', 'landfill'][Math.floor(Math.random() * 4)];
        let wasteItem = new Waste(this.stage, wasteType);
        this.waste.push(wasteItem);
    }

    generateWaste() {
        this.generateWasteVar = setInterval(()=>this.createWaste(this.stage),1500);
    }

    collisionCheck() {
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
                            this.stage.removeChild(waste.waste);
                            this.waste.splice(idx, 1);
                            createjs.Sound.play("correct");
                            this.scoreVal += 10;
                            this.updateScore(this.stage);
                        } else {
                            this.stage.removeChild(waste.waste);
                            this.waste.splice(idx, 1);
                            createjs.Sound.play("incorrect");
                            this.scoreVal -= 10;
                            this.updateScore(this.stage);
                        };
                    }

            }, this)
        }, this )

    }

    wrapCheck() {
        //if any waste items exceed canvas boundaires, remove from
        //stage and array

        this.waste.forEach((waste, idx) => {
            if (waste.waste.x + (waste.waste.image.width * waste.waste.scaleX / 2) > this.stage.canvas.width) {
                this.stage.removeChild(waste.waste);
                this.waste.splice(idx, 1);
                createjs.Sound.play("incorrect");
                this.scoreVal -= 10;
                this.updateScore(this.stage);
            }
        })
    }

    createScoreboard() {
        const score = new createjs.Text("SCORE", "bold 24px Arial", "#FFFFFF");
        score.textAlign = "right";
        score.textBaseline = "middle";
        score.x = canvas.width - 20;
        score.y = canvas.height - 100;
        this.stage.addChild(score);
    }

    updateScore() {
        this.stage.removeChild(this.score);
        const scoreText = new createjs.Text(`${this.scoreVal}`, "bold 100px Arial", "#FFFFFF");
        scoreText.textAlign = "right";
        scoreText.textBaseline = "middle";
        scoreText.x = canvas.width - 15;
        scoreText.y = canvas.height - 40;
        this.stage.addChild(scoreText);
        this.score = scoreText;
        return scoreText;
    }

    startTimer() {
        this.stage.removeChild(this.timer);
        const timer = new createjs.Text(`${timerFormatter(this.timerSecs)}`, "40px Arial", "#FFFFFF");
        timer.textAlign = "right";
        timer.textBaseline = "middle";
        timer.x = 120
        timer.y = canvas.height - 20;
        this.stage.addChild(timer);
        this.timer = timer;
        return timer;
    }

    tickTimer() {
        this.timerVar = setInterval(() => {
            this.timerSecs -= 1;
            this.startTimer(this.stage);
        }, 1000);
    }

    gameOver() {
        if (this.timerSecs === 0) {
            clearInterval(this.timerVar);
            clearInterval(this.generateWasteVar);
            this.waste.forEach(waste => this.stage.removeChild(waste.waste), this)

            const gameOverHeader = new createjs.Text("GAME OVER", "bold 50px Arial", "#FFFFFF");
            gameOverHeader.textAlign = "center";
            gameOverHeader.textBaseline = "middle";
            gameOverHeader.x = canvas.width / 2;
            gameOverHeader.y = canvas.height / 5;

            const replayButton = new createjs.Bitmap("./assets/images/play_again_button.png");
            
            replayButton.scaleX = 0.3;
            replayButton.scaleY = 0.3;
            replayButton.x = 300;
            replayButton.y = gameOverHeader.y + 40;
            replayButton.cursor = "pointer";
            replayButton.on("mousedown", () => window.location.reload());
            this.stage.addChild(gameOverHeader, replayButton);
        };
    }

    toggleSound() {
        if (this.muted) {
            this.muted = false;
            createjs.Sound.muted = false;
            this.stage.removeChild(this.soundOffButton);    
            this.stage.addChild(this.soundOnButton);
        } else {
            this.muted = true;
            createjs.Sound.muted = true;
            this.stage.removeChild(this.soundOnButton);
            this.stage.addChild(this.soundOffButton);
        }
    }
}

export default Game;
