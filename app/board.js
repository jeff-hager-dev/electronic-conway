(function(exports){
  //Board Definition
  'use strict';

  var board = function(){
    this.cells = [];
    this.size = {'x': 20, 'y': 20};
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
    _.each(this.cells, function(cell){
      
    });
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


  board.$inject = [];

  exports.board = board;

})(window);