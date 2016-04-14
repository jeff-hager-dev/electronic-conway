var config = require('../config');

(function (exports) {
  //Board Definition
  'use strict';

  var board = function ($interval) {
    this.$interval = $interval;
    this.init();
  };

  board.prototype.init = function () {
    
    this.generation = 0;
    this.cells = [];
    this.size = config.board.size;
    this.updateInterval = 500;
    this.nIntervId = null;

    for (var x = 0; x < this.size.x; x++) {
      this.cells[x] = [];
      for (var y = 0; y < this.size.y; y++) {
        var newCell = new Cell();
        this.cells[x][y] = newCell;
      }
    }
  };

  board.prototype.updateBoard = function () {
    var deadCells = [];
    var livingCells = [];
    for (var x = 0; x < this.size.x; x++) {
      for (var y = 0; y < this.size.y; y++) {
        var livingCount = this._countLiveNeighbours(x, y);
        if (this.cells[x][y].isAlive() && (livingCount <= 1 || livingCount > 3)) {
          deadCells.push(this.cells[x][y]);
        }
        else if (!this.cells[x][y].isAlive() && livingCount === 3) {
          livingCells.push(this.cells[x][y]);
        }
      }
    }

    _.each(deadCells, function (cell) {
      cell.kill();
    });

    _.each(livingCells, function (cell) {
      cell.born();
    });

  };

  board.prototype._countLiveNeighbours = function (x, y) {
    var cells = this.cells;
    var _isLiving = function (x, y) {
      return (!cells[x] || !cells[x][y]) ? 0 : cells[x][y].isAlive();
    };
    var liveCnt = 0;

    if (_isLiving(x - 1, y - 1)) liveCnt++;
    if (_isLiving(x, y - 1)) liveCnt++;
    if (_isLiving(x + 1, y - 1)) liveCnt++;
    if (_isLiving(x - 1, y)) liveCnt++;
    if (_isLiving(x + 1, y)) liveCnt++;
    if (_isLiving(x - 1, y + 1)) liveCnt++;
    if (_isLiving(x, y + 1)) liveCnt++;
    if (_isLiving(x + 1, y + 1)) liveCnt++;

    return liveCnt;
  };

  board.prototype.startGame = function () {
    var boardScope = this;
    this.nIntervId = boardScope.$interval(function () {
      boardScope.updateBoard();
      boardScope.generation += 1;
    }, this.updateInterval);
  };

  board.prototype.stopGame = function () {
    this.$interval.cancel(this.nIntervId);
    this.nIntervId = undefined;
  };

  board.prototype.restartGame = function () {
    this.stopGame();
    this.init();
  };


  board.$inject = ['$interval'];

  exports.board = board;

})(window);