(function(exports){
  "use strict";
  var conway = angular.module('conway', [])
    .directive('boardDisplay', displayDirective)
    .service('board', board);
  exports.conway = conway;
})(window);