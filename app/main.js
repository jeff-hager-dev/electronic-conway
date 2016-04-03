(function(exports){
  "use strict";
  var conway = angular.module('conway', [])
    .directive('boardDisplay', displayDirective);
  exports.conway = conway;
})(window);