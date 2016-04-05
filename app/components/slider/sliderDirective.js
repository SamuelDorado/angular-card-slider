(function() {
    'use strict';
    angular
      .module('card-slider')
      .directive('cardSlider', directive);

      function directive($window, $timeout) {
        var directive = {
          restrict: 'E',
          transclude: true,
          scope: {
            csDeck: '='
          },
          templateUrl: 'components/slider/slider.html',
          link: dataCharge
        };
        return directive

        function dataCharge(scope,el){
            scope.direction= '';
            scope.previousCardIndex = 0;
            scope.currentCardIndex = 1;
            scope.nextCardIndex = 3;


            scope.prevCard = function () {
               scope.direction = 'right';
               scope.nextCardIndex = scope.currentCardIndex;
               if (scope.currentCardIndex > 0) {
                 var newCurrentCardIndex = --scope.currentCardIndex;
                 scope.previousCardIndex = (newCurrentCardIndex > 0) ? --newCurrentCardIndex : scope.csDeck.length - 1;
               } else {
                 scope.currentCardIndex = scope.csDeck.length - 1;
                 var newCurrentCardIndex=scope.currentCardIndex;
                 scope.previousCardIndex= --newCurrentCardIndex;
               }
            };

             scope.nextCard = function () {
              scope.direction = 'left';
              scope.previousCardIndex = scope.currentCardIndex ;
              if (scope.currentCardIndex < scope.csDeck.length - 1) {
                  var newCurrentCardIndex = ++scope.currentCardIndex;
                  scope.nextCardIndex = (newCurrentCardIndex < scope.csDeck.length - 1) ? ++newCurrentCardIndex  : 0
              } else {
                  scope.currentCardIndex = 0;
                  var newCurrentCardIndex=scope.currentCardIndex;
                  scope.nextCardIndex= ++newCurrentCardIndex;
              }
             };

            console.log(scope);
            console.log(el);
        }
      }
})();
