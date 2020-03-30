# RightBinSF

[RightBin](https://andhudhow.github.io/right-bin-sf/) is a fun game to teach San Franciscans how to pick the right bin and save the planet.

![home](assets/images/RightBinSF.gif "HanCooking")

## How to play
* Players are present with streams of different types of waste which they must drag into the appropriate bin (compost, recycling landfill).
* 10 points are awarded for picking the right bin.
* Pick the wrong bin or don't sort the waste in time and 10 points are deducted.

## Technologies used
* Vanilla JS for game logic
* HTML5 Canvas and EaselJS for DOM manipulation and rendering
* SoundJS for game sounds
* Webpack for bundling scripts

## Implementation details
* Collision detection between the waste and the bin determines if the waste item has been placed correctly or incorrectly and increments/decrements the score accordingly.
```javascript
    collisionCheck() {
        //check if the trash has collided with a bin
        //if it's collided with the right bin type, accrue points
        //if it's collided with the wrong bin type, lose points

        this.waste.forEach((waste, idx) => {
            const wasteHeight = waste.waste.image.height * waste.waste.scaleY;
            const bottomWasteBorder = waste.waste.y + (wasteHeight / 2);
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
                            this.waste.splice(idx, 1);
                            this.stage.removeChild(waste.waste);
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
```    

* Any waste that exceeds the boundaries of the canvas is remove from the Stage and state and the score is decremented
```javascript
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
```

### Future features
* Multiple levels of difficulty (single bin, "no bin" items)
* Multiple trash velocities on more difficult levels
