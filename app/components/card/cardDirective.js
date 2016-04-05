(function() {
    'use strict';
    angular
      .module('card-slider')
      .directive('card', directive);

      function directive($window, $timeout) {
        var directive = {
          restrict: 'E',
          transclude: true,
          scope: {
            csCardTitle: '@',
            csCardFamily: '@',
            csCardObverse:'@',
            csCardReverse:'@'
          },
          link:dataCharge,
          templateUrl: 'components/card/card.html'
        };
        return directive

        function dataCharge(scope,el){

        }
      }
})();
