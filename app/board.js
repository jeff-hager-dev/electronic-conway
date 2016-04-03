(function(exports){
  //Board Definition
  'use strict';

  var board = function(x , y){
    this.cells = [];
    this.size = {'x': x, 'y': y};
  };

  board.prototype.init = function(){
    for (x = 0; x < this.size.x; x++) {
      for(y = 0; y < this.size.y; y++) {
        this.cells[x][y] = new Cell(false);
      }
    }
  };

  board.prototype.update = function(){
  };

  exports.board = board;

})(window);