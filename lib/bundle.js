/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/rightbin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bin.js":
/*!********************!*\
  !*** ./lib/bin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bin = /*#__PURE__*/function () {
  function Bin(stage, type) {
    _classCallCheck(this, Bin);

    this.type = type;
    this.stage = stage;
    this.bin = this.draw(stage);
  }

  _createClass(Bin, [{
    key: "draw",
    value: function draw() {
      if (this.type === 'compost') {
        var compost = new createjs.Bitmap("./assets/images/green_bin.png");
        compost.x = 100;
        compost.y = 300;
        this.stage.addChild(compost);
        return compost;
      } else if (this.type === 'recycle') {
        var recycle = new createjs.Bitmap("./assets/images/blue_bin.png");
        recycle.x = 300;
        recycle.y = 300;
        this.stage.addChild(recycle);
        return recycle;
      } else if (this.type === 'landfill') {
        var landfill = new createjs.Bitmap("./assets/images/black_bin.png");
        landfill.x = 500;
        landfill.y = 300;
        this.stage.addChild(landfill);
        return landfill;
      }
    }
  }]);

  return Bin;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bin);

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bin */ "./lib/bin.js");
/* harmony import */ var _waste__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waste */ "./lib/waste.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(stage) {
    _classCallCheck(this, Game);

    this.waste = [];
    this.scoreVal = 0;
    this.timerSecs = 60;
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

  _createClass(Game, [{
    key: "initialScreen",
    value: function initialScreen(stage) {
      var _this = this;

      createjs.Ticker.addEventListener('tick', stage);
      var intro = new createjs.Text("Click to Play", "bold 50px Arial", "#FFFFFF");
      intro.textAlign = "center";
      intro.textBaseline = "middle";
      intro.x = canvas.width / 2;
      intro.y = canvas.height / 8;
      intro.cursor = "pointer";
      stage.addChild(intro);

      canvas.onclick = function () {
        stage.removeChild(intro);

        _this.prePlayInfo(stage);
      };
    }
  }, {
    key: "prePlayInfo",
    value: function prePlayInfo(stage) {
      var _this2 = this;

      var info = new createjs.Text("Drag trash to the right bin and earn points!", "bold 30px Arial", "#FFFFFF");
      info.textAlign = "center";
      info.textBaseline = "middle";
      info.x = canvas.width / 2;
      info.y = canvas.height / 8;
      info.pointer = "cursor";
      var start = new createjs.Text("Click anywhere to start game", "bold 28px Arial", "#FFFFFF");
      start.textAlign = "center";
      start.textBaseline = "middle";
      start.x = canvas.width / 2;
      start.y = info.y + 40;
      var compost_label = new createjs.Text("COMPOST", "bold 28px Arial", "#FFFFFF");
      compost_label.textAlign = "left";
      compost_label.textBaseline = "middle";
      compost_label.x = 80;
      compost_label.y = 450;
      var recycle_label = new createjs.Text("RECYCLE", "bold 28px Arial", "#FFFFFF");
      recycle_label.textAlign = "left";
      recycle_label.textBaseline = "middle";
      recycle_label.x = 300;
      recycle_label.y = 450;
      var landfill_label = new createjs.Text("LANDFILL", "bold 28px Arial", "#FFFFFF");
      landfill_label.textAlign = "left";
      landfill_label.textBaseline = "middle";
      landfill_label.x = 500;
      landfill_label.y = 450;
      this.createBins(stage);
      stage.addChild(info, start, compost_label, recycle_label, landfill_label);

      canvas.onclick = function () {
        canvas.onclick = null;
        stage.removeChild(info, start, compost_label, recycle_label, landfill_label);

        _this2.startGame(stage);
      };
    }
  }, {
    key: "startGame",
    value: function startGame(stage) {
      var _this3 = this;

      this.createWaste(stage);
      this.generateWaste(stage);
      this.createScoreboard(stage);
      this.score = this.updateScore(stage);
      this.timer = this.startTimer(stage);
      this.tickTimer(stage);
      createjs.Ticker.addEventListener('tick', function () {
        return console.log('TICK!');
      });
      createjs.Ticker.addEventListener('tick', function () {
        return _this3.wrapCheck(stage);
      });
      createjs.Ticker.addEventListener('tick', function () {
        return _this3.collisionCheck(stage);
      });
      createjs.Ticker.addEventListener('tick', function () {
        return _this3.gameOver(stage);
      });
      createjs.Sound.play("hungboo", {
        interrupt: createjs.Sound.INTERRUPT_ANY,
        loop: -1,
        volume: 0.1
      });
    }
  }, {
    key: "createBins",
    value: function createBins(stage) {
      var compost_bin = new _bin__WEBPACK_IMPORTED_MODULE_0__["default"](stage, 'compost');
      this.bins.push(compost_bin);
      var recycle_bin = new _bin__WEBPACK_IMPORTED_MODULE_0__["default"](stage, 'recycle');
      this.bins.push(recycle_bin);
      var landfill_bin = new _bin__WEBPACK_IMPORTED_MODULE_0__["default"](stage, 'landfill');
      this.bins.push(landfill_bin);
    }
  }, {
    key: "createWaste",
    value: function createWaste(stage) {
      var wasteType = ['compost', 'recycle', 'recycle', 'landfill'][Math.floor(Math.random() * 4)];
      var wasteItem = new _waste__WEBPACK_IMPORTED_MODULE_1__["default"](stage, wasteType);
      this.waste.push(wasteItem);
    }
  }, {
    key: "generateWaste",
    value: function generateWaste(stage) {
      var _this4 = this;

      this.generateWasteVar = setInterval(function () {
        return _this4.createWaste(stage);
      }, 1500);
    }
  }, {
    key: "collisionCheck",
    value: function collisionCheck(stage) {
      var _this5 = this;

      //check if the trash has collided with a bin
      //if it's collided with the right bin type, accrue points
      //if it's collided with the wrong bin type, lose points
      this.waste.forEach(function (waste, idx) {
        var wasteHeight = waste.waste.image.height * waste.waste.scaleY;
        var bottomWasteBorder = waste.waste.y + wasteHeight / 3;

        _this5.bins.forEach(function (bin) {
          //go about 1/3 of the way into the waste item
          var wasteX = waste.waste.x;
          var binWidth = bin.bin.image.width;
          var binHeight = bin.bin.image.height;
          var binXBorderLeft = bin.bin.x - binWidth / 2;
          var binXBorderRight = bin.bin.x + binWidth / 3;
          var binYBorderTop = bin.bin.y - binHeight / 3; //if the waste center is between the bin's X axis borders
          //and the bottom 1/3rd of waste is beyond the top border of bin

          if (wasteX > binXBorderLeft && wasteX < binXBorderRight && bottomWasteBorder > binYBorderTop) {
            if (waste.type === bin.type) {
              stage.removeChild(waste.waste);

              _this5.waste.splice(idx, 1);

              createjs.Sound.play("correct");
              _this5.scoreVal += 10;

              _this5.updateScore(stage);
            } else {
              stage.removeChild(waste.waste);

              _this5.waste.splice(idx, 1);

              createjs.Sound.play("incorrect");
              _this5.scoreVal -= 10;

              _this5.updateScore(stage);
            }

            ;
          }
        }, _this5);
      }, this);
    }
  }, {
    key: "wrapCheck",
    value: function wrapCheck(stage) {
      var _this6 = this;

      //if any waste items exceed canvas boundaires, remove from
      //stage and array
      this.waste.forEach(function (waste, idx) {
        if (waste.waste.x + waste.waste.image.width * waste.waste.scaleX / 2 > stage.canvas.width) {
          stage.removeChild(waste.waste);

          _this6.waste.splice(idx, 1);

          createjs.Sound.play("incorrect");
          _this6.scoreVal -= 10;

          _this6.updateScore(stage);
        }
      });
    }
  }, {
    key: "createScoreboard",
    value: function createScoreboard(stage) {
      var score = new createjs.Text("SCORE", "bold 24px Arial", "#FFFFFF");
      score.textAlign = "right";
      score.textBaseline = "middle";
      score.x = canvas.width - 20;
      score.y = canvas.height - 100;
      stage.addChild(score);
    }
  }, {
    key: "updateScore",
    value: function updateScore(stage) {
      stage.removeChild(this.score);
      var score = new createjs.Text("".concat(this.scoreVal), "bold 100px Arial", "#FFFFFF");
      score.textAlign = "right";
      score.textBaseline = "middle";
      score.x = canvas.width - 15;
      score.y = canvas.height - 40;
      stage.addChild(score);
      this.score = score;
      return score;
    }
  }, {
    key: "startTimer",
    value: function startTimer(stage) {
      stage.removeChild(this.timer);
      var timer = new createjs.Text("".concat(Object(_util__WEBPACK_IMPORTED_MODULE_2__["timerFormatter"])(this.timerSecs)), "40px Arial", "#FFFFFF");
      timer.textAlign = "right";
      timer.textBaseline = "middle";
      timer.x = 120;
      timer.y = canvas.height - 20;
      stage.addChild(timer);
      this.timer = timer;
      return timer;
    }
  }, {
    key: "tickTimer",
    value: function tickTimer(stage) {
      var _this7 = this;

      this.timerVar = setInterval(function () {
        _this7.timerSecs -= 1;

        _this7.startTimer(stage);
      }, 1000);
    }
  }, {
    key: "gameOver",
    value: function gameOver(stage) {
      if (this.timerSecs === 0) {
        clearInterval(this.timerVar);
        clearInterval(this.generateWasteVar);
        this.waste.forEach(function (waste) {
          return stage.removeChild(waste.waste);
        }, this);
        var gameOverHeader = new createjs.Text("GAME OVER", "bold 50px Arial", "#FFFFFF");
        gameOverHeader.textAlign = "center";
        gameOverHeader.textBaseline = "middle";
        gameOverHeader.x = canvas.width / 2;
        gameOverHeader.y = canvas.height / 5;
        var replayButton = new createjs.Bitmap("./assets/images/play_again_button.png");
        replayButton.scaleX = 0.3;
        replayButton.scaleY = 0.3;
        replayButton.x = 300;
        replayButton.y = gameOverHeader.y + 40;
        replayButton.cursor = "pointer";
        replayButton.on("mousedown", function () {
          return window.location.reload();
        });
        stage.addChild(gameOverHeader, replayButton);
      }

      ;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./lib/rightbin.js":
/*!*************************!*\
  !*** ./lib/rightbin.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  canvas.cache;
  var stage = new createjs.Stage(canvas); // enable touch interactions if supported on the current device:

  createjs.Touch.enable(stage); // enabled mouse over / out events

  stage.enableMouseOver(10);
  stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

  var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](stage, canvas);
});

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: timerFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFormatter", function() { return timerFormatter; });
var timerFormatter = function timerFormatter(sec) {
  var mins = Math.floor(sec / 60);
  var secs = sec % 60;
  var mins_formatted;
  var secs_formatted;

  if (mins < 10) {
    mins_formatted = "0".concat(mins);
  } else {
    mins_formatted = mins;
  }

  ;

  if (secs < 10) {
    secs_formatted = "0".concat(secs);
  } else {
    secs_formatted = secs;
  }

  ;
  return "".concat(mins_formatted, ":").concat(secs_formatted);
};

/***/ }),

/***/ "./lib/waste.js":
/*!**********************!*\
  !*** ./lib/waste.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Waste = /*#__PURE__*/function () {
  function Waste(stage, type) {
    _classCallCheck(this, Waste);

    this.type = type;
    this.stage = stage;
    this.waste = this.draw(stage);
  }

  _createClass(Waste, [{
    key: "randomPosition",
    value: function randomPosition() {}
  }, {
    key: "draw",
    value: function draw() {
      //if compost pick a random number between 1 and 15
      //if recycle pick a random number between 1 and 20
      //if landfill pick a random number between 1 and 11
      var waste;

      if (this.type === 'compost') {
        var rand_img_num = Math.floor(Math.random() * 15);
        waste = new createjs.Bitmap("./assets/images/compost_".concat(rand_img_num, ".png"));
      } else if (this.type === 'recycle') {
        var _rand_img_num = Math.floor(Math.random() * 20);

        waste = new createjs.Bitmap("./assets/images/recycle_".concat(_rand_img_num, ".png"));
      } else if (this.type === 'landfill') {
        var _rand_img_num2 = Math.floor(Math.random() * 10);

        waste = new createjs.Bitmap("./assets/images/landfill_".concat(_rand_img_num2, ".png"));
      }

      waste.x = -200;
      waste.scaleX = 0.2;
      waste.scaleY = 0.2;
      waste.width = waste.image.width * waste.scaleX;
      waste.height = waste.image.height * waste.scaleY;
      waste.cursor = "pointer";
      waste.on("mousedown", function (e) {
        this.stage.addChild(this);
        this.offset = {
          x: this.x - e.stageX,
          y: this.y - e.stageY
        };
      }); // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.

      waste.on("pressmove", function (e) {
        this.x = e.stageX + this.offset.x;
        this.y = e.stageY + this.offset.y;
      }); // waste.on("pressup", function (e) {
      //     this.releaseY = this.y;
      //     this.releaseX = this.y;
      // });

      waste.on("rollover", function (e) {
        this.scaleX = 0.25;
        this.scaleY = 0.25;
      });
      waste.on("rollout", function (e) {
        this.scaleX = 0.2;
        this.scaleY = 0.2;
      });
      waste.on("tick", function () {
        return waste.x += 2;
      });
      this.stage.addChild(waste);
      return waste;
    }
  }]);

  return Waste;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Waste);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map