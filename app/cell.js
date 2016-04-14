

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
    console.log('cell born');
    this._living = true;
  };

  Cell.prototype.kill = function(){
    console.log('cell died');
    this._living = false;
  };
  Cell.prototype.change = function(){

    this._living = !this._living;
  };

  Cell.prototype.setAction = function(action){
    this._action = action;
  };

  Cell.prototype.triggerAction = function(){
    this._action();
  };

  exports.Cell = Cell;
})(window);