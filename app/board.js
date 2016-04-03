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
  };


  board.$inject = [];

  exports.board = board;

})(window);