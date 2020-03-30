!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a.r(t);var i=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=a,this.stage=t,this.bin=this.draw(t)}var t,a,i;return t=e,(a=[{key:"draw",value:function(){var e,t;return"compost"===this.type?((e=new createjs.Bitmap("./assets/images/green_bin.png")).x=100,e.y=300,(t=new createjs.Text("COMPOST","bold 28px Arial","#FFFFFF")).textAlign="left",t.textBaseline="middle",t.x=80,t.y=450):"recycle"===this.type?((e=new createjs.Bitmap("./assets/images/blue_bin.png")).x=300,e.y=300,(t=new createjs.Text("RECYCLE","bold 28px Arial","#FFFFFF")).textAlign="left",t.textBaseline="middle",t.x=300,t.y=450):"landfill"===this.type&&((e=new createjs.Bitmap("./assets/images/black_bin.png")).x=520,e.y=300,(t=new createjs.Text("LANDFILL","bold 28px Arial","#FFFFFF")).textAlign="left",t.textBaseline="middle",t.x=500,t.y=450),this.stage.addChild(e,t),e.on("rollover",(function(e){this.scaleX=1.3,this.scaleY=1.3,this.y-=20})),e.on("rollout",(function(e){this.scaleX=1,this.scaleY=1,this.y+=20})),e}}])&&n(t.prototype,a),i&&n(t,i),e}();function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=a,this.stage=t,this.waste=this.draw(t)}var t,a,n;return t=e,(a=[{key:"randomPosition",value:function(){}},{key:"draw",value:function(){var e;if("compost"===this.type){var t=Math.floor(15*Math.random());e=new createjs.Bitmap("./assets/images/compost_".concat(t,".png"))}else if("recycle"===this.type){var a=Math.floor(20*Math.random());e=new createjs.Bitmap("./assets/images/recycle_".concat(a,".png"))}else if("landfill"===this.type){var n=Math.floor(10*Math.random());e=new createjs.Bitmap("./assets/images/landfill_".concat(n,".png"))}return e.x=-200,e.scaleX=.22,e.scaleY=.22,e.width=e.image.width*e.scaleX,e.height=e.image.height*e.scaleY,e.cursor="pointer",e.on("mousedown",(function(e){this.stage.addChild(this),this.offset={x:this.x-e.stageX,y:this.y-e.stageY}})),e.on("pressmove",(function(e){this.x=e.stageX+this.offset.x,this.y=e.stageY+this.offset.y})),e.on("tick",(function(){return e.x+=2})),this.stage.addChild(e),e}}])&&s(t.prototype,a),n&&s(t,n),e}();function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stage=t,this.waste=[],this.bins=[],this.scoreVal=0,this.timerSecs=60,this.timerVar={},this.generateWasteVar={},this.muted=!1,this.soundOnButton={},this.soundOffButton={},this.score={},createjs.Ticker.framerate=60,createjs.Ticker.addEventListener("tick",t),this.initializeSounds(),this.initialScreen()}var t,a,n;return t=e,(a=[{key:"initializeSounds",value:function(){var e=this;this.soundOnButton=new createjs.Bitmap("./assets/images/volume_on.png"),this.soundOffButton=new createjs.Bitmap("./assets/images/mute.png"),this.soundOnButton.x=350,this.soundOnButton.y=460,this.soundOnButton.scaleX=.75,this.soundOnButton.scaleY=.75,this.soundOffButton.x=350,this.soundOffButton.y=465,this.soundOffButton.scaleX=.6,this.soundOffButton.scaleY=.6,this.soundOnButton.addEventListener("click",(function(){return e.toggleSound(e.stage)})),this.soundOffButton.addEventListener("click",(function(){return e.toggleSound(e.stage)})),createjs.Sound.registerSound("assets/sounds/correct.mp3","correct"),createjs.Sound.registerSound("assets/sounds/incorrect.mp3","incorrect"),createjs.Sound.registerSound("assets/sounds/hungboo.mp3","hungboo")}},{key:"initialScreen",value:function(){var e=this;createjs.Ticker.addEventListener("tick",this.stage);var t=new createjs.Text("Click to Play","bold 50px Arial","#FFFFFF");t.textAlign="center",t.textBaseline="middle",t.x=canvas.width/2,t.y=canvas.height/8,t.cursor="pointer",this.stage.addChild(t),this.createBins(this.stage),canvas.onclick=function(){e.stage.removeChild(t),e.prePlayInfo(e.stage)}}},{key:"prePlayInfo",value:function(){var e=this,t=new createjs.Text("Drag trash to the right bin and earn points!","bold 30px Arial","#FFFFFF");t.textAlign="center",t.textBaseline="middle",t.x=canvas.width/2,t.y=canvas.height/8,t.pointer="cursor";var a=new createjs.Text("Click anywhere to start game","bold 28px Arial","#FFFFFF");a.textAlign="center",a.textBaseline="middle",a.x=canvas.width/2,a.y=t.y+40,this.createScoreboard(),this.updateScore(),this.stage.addChild(t,a,this.soundOnButton),canvas.onclick=function(){canvas.onclick=null,e.stage.removeChild(t,a),e.startGame(e.stage)}}},{key:"startGame",value:function(){var e=this;this.createWaste(),this.generateWaste(),this.createScoreboard(),this.timer=this.startTimer(),this.tickTimer(),createjs.Ticker.addEventListener("tick",(function(){return e.wrapCheck()})),createjs.Ticker.addEventListener("tick",(function(){return e.collisionCheck()})),createjs.Ticker.addEventListener("tick",(function(){return e.gameOver()})),createjs.Sound.play("hungboo",{interrupt:createjs.Sound.INTERRUPT_ANY,loop:-1,volume:.1})}},{key:"createBins",value:function(){var e=this;["compost","recycle","landfill"].forEach((function(t){var a=new i(e.stage,t);e.bins.push(a)}))}},{key:"createWaste",value:function(){var e=["compost","recycle","recycle","landfill"][Math.floor(4*Math.random())],t=new r(this.stage,e);this.waste.push(t)}},{key:"generateWaste",value:function(){var e=this;this.generateWasteVar=setInterval((function(){return e.createWaste(e.stage)}),1500)}},{key:"collisionCheck",value:function(){var e=this;this.waste.forEach((function(t,a){var n=t.waste.image.height*t.waste.scaleY,i=t.waste.y+n/2;e.bins.forEach((function(n){var s=t.waste.x,r=n.bin.image.width,o=n.bin.image.height,c=n.bin.x-r/2,l=n.bin.x+r/3,u=n.bin.y-o/3;s>c&&s<l&&i>u&&(t.type===n.type?(e.waste.splice(a,1),e.stage.removeChild(t.waste),createjs.Sound.play("correct"),e.scoreVal+=10,e.updateScore(e.stage)):(e.stage.removeChild(t.waste),e.waste.splice(a,1),createjs.Sound.play("incorrect"),e.scoreVal-=10,e.updateScore(e.stage)))}),e)}),this)}},{key:"wrapCheck",value:function(){var e=this;this.waste.forEach((function(t,a){t.waste.x+t.waste.image.width*t.waste.scaleX/2>e.stage.canvas.width&&(e.stage.removeChild(t.waste),e.waste.splice(a,1),createjs.Sound.play("incorrect"),e.scoreVal-=10,e.updateScore(e.stage))}))}},{key:"createScoreboard",value:function(){var e=new createjs.Text("SCORE","bold 24px Arial","#FFFFFF");e.textAlign="right",e.textBaseline="middle",e.x=canvas.width-20,e.y=canvas.height-70,this.stage.addChild(e)}},{key:"updateScore",value:function(){this.stage.removeChild(this.score);var e=new createjs.Text("".concat(this.scoreVal),"bold 60px Arial","#FFFFFF");return e.textAlign="right",e.textBaseline="middle",e.x=canvas.width-15,e.y=canvas.height-25,this.stage.addChild(e),this.score=e,e}},{key:"startTimer",value:function(){this.stage.removeChild(this.timer);var e,t,a,n,i,s=new createjs.Text("".concat((e=this.timerSecs,n=Math.floor(e/60),i=e%60,t=n<10?"0".concat(n):n,a=i<10?"0".concat(i):i,"".concat(t,":").concat(a))),"40px Arial","#FFFFFF");return s.textAlign="right",s.textBaseline="middle",s.x=120,s.y=canvas.height-20,this.stage.addChild(s),this.timer=s,s}},{key:"tickTimer",value:function(){var e=this;this.timerVar=setInterval((function(){e.timerSecs-=1,e.startTimer(e.stage)}),1e3)}},{key:"gameOver",value:function(){var e=this;if(0===this.timerSecs){clearInterval(this.timerVar),clearInterval(this.generateWasteVar),this.waste.forEach((function(t){return e.stage.removeChild(t.waste)}),this);var t=new createjs.Text("GAME OVER","bold 50px Arial","#FFFFFF");t.textAlign="center",t.textBaseline="middle",t.x=canvas.width/2,t.y=canvas.height/5;var a=new createjs.Bitmap("./assets/images/play_again_button.png");a.scaleX=.3,a.scaleY=.3,a.x=300,a.y=t.y+40,a.cursor="pointer",a.on("mousedown",(function(){return window.location.reload()})),this.stage.addChild(t,a)}}},{key:"toggleSound",value:function(){this.muted?(this.muted=!1,createjs.Sound.muted=!1,this.stage.removeChild(this.soundOffButton),this.stage.addChild(this.soundOnButton)):(this.muted=!0,createjs.Sound.muted=!0,this.stage.removeChild(this.soundOnButton),this.stage.addChild(this.soundOffButton))}}])&&o(t.prototype,a),n&&o(t,n),e}();document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("canvas");e.cache;var t=new createjs.Stage(e);createjs.Touch.enable(t),t.enableMouseOver(10),t.mouseMoveOutside=!0;new c(t,e)}))}]);
//# sourceMappingURL=bundle.js.map