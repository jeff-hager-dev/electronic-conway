(function (exports) {
  'use strict';
  var displayDirective = function () {
    return {
      restrict: "E",
      replace: true,
      scope: {
        from: "="
      },
      templateUrl: 'display/template.html'
    };
  };

  displayDirective.$inject = [];

  exports.displayDirective = displayDirective;
})(window);