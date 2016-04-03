

(function(exports){
  // Cell definition
  "use strict";


  var Cell = function(){
    this._living = false;
  };
  Cell.prototype.isAlive = function(){
    return this._living;
  };

  Cell.prototype.born = function(){
    this._living = true;
  };

  Cell.prototype.kill = function(){
    this._living = false;
  };
  Cell.prototype.change = function(){
    this._living = !this._living;
  };
  exports.Cell = Cell;
})(window);