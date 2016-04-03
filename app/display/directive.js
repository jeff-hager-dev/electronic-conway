(function (exports) {
  'use strict';
  var displayDirective = function (board) {
    return {
      restrict: "E",
      replace: true,
      scope: {
        from: "="
      },
      templateUrl: 'display/template.html',
      link: function (scope) {
        scope.board = board;
      }
    };
  };

  displayDirective.$inject = ['board'];

  exports.displayDirective = displayDirective;
})(window);