(function(exports){
  //Board Definition
  'use strict';

  var board = function(){
    this.generation = 0;
    this.cells = [];
    this.size = {'x': 30, 'y': 50};
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

  board.prototype.update = function(){
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

  board.prototype.start = function(){
    console.log('start');
  };

  board.prototype.stop = function(){
    console.log('stop');
  };

  board.prototype.restart = function(){
    console.log('restart');
  };


  board.$inject = [];

  exports.board = board;

})(window);