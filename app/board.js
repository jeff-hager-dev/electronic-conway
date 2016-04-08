(function (exports) {
  //Board Definition
  'use strict';

  var board = function () {
    this.generation = 0;
    this.cells = [];
    this.size = {'x': 30, 'y': 50};
    this.updateInterval = 500;
    this.nIntervId = null;
    this.init();
  };

  board.prototype.init = function () {
    console.log('init');
    for (var x = 0; x < this.size.x; x++) {
      this.cells[x] = [];
      for (var y = 0; y < this.size.y; y++) {
        this.cells[x][y] = new Cell();
      }
    }
  };

  board.prototype.updateBoard = function () {
    var deadCells = [];
    var livingCells = [];
    for (var x = 0; x < this.size.x; x++) {
      for (var y = 0; y < this.size.y; y++) {
        var livingCount = this._countLiveNeighbours(x, y);
        if ((livingCount < 0 || livingCount > 3) && this.cells[x][y].isAlive()) {
          deadCells.push(this.cells[x][y]);
        }
        if (livingCount === 3 && !this.cells[x][y].isAlive()) {
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
    this.nIntervId = setInterval(function () {
      boardScope.updateBoard()
    }, this.updateInterval);
  };

  board.prototype.stopGame = function () {
    clearInterval(this.nIntervId);
  };

  board.prototype.restartGame = function () {
    this.stopGame();
    this.init();
  };


  board.$inject = [];

  exports.board = board;

})(window);