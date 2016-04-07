(function(exports){
  //Board Definition
  'use strict';

  var board = function(){
    this.generation = 0;
    this.cells = [];
    this.size = {'x': 30, 'y': 50};
    this.updateInterval = 400;
    this.nIntervId = null;
    this.init();
  };

  board.prototype.init = function(){
    for (var x = 0; x < this.size.x; x++) {
      this.cells[x] = [];
      for(var y = 0; y < this.size.y; y++) {
        this.cells[x][y] = new Cell();
      }
    }
  };

  board.prototype.updateBoard = function(){
    for (var x = 0; x < this.size.x; x++) {
      for(var y = 0; y < this.size.y; y++) {
        var livingCount = this._countLiveNeighbours(x, y);
      }
    }
  };

  board.prototype._countLiveNeighbours = function(x, y){
    var _isLiving = function(x, y){};
    var liveCnt = 0;

    if (_isLiving(x-1, y-1)) liveCnt++;
    if (_isLiving(x, y-1)) liveCnt++;
    if (_isLiving(x+1, y-1)) liveCnt++;
    if (_isLiving(x-1, y)) liveCnt++;
    if (_isLiving(x+1, y)) liveCnt++;
    if (_isLiving(x-1, y+1)) liveCnt++;
    if (_isLiving(x, y+1)) liveCnt++;
    if (_isLiving(x+1, y+1)) liveCnt++;

    return liveCnt;
  };

  board.prototype.startGame = function() {
    this.nIntervId = setInterval(this.updateBoard, this.updateInterval);
  };

  board.prototype.stopGame = function(){
    clearInterval(this.nIntervId);
  };

  board.prototype.restartGame = function(){
    this.stopGame();
    this.init();
  };


  board.$inject = [];

  exports.board = board;

})(window);