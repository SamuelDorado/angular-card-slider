(function() {
  'use strict';

  angular
    .module('card-slider')
    .controller('homeCtrl', controller);

  function controller($scope) {
    $scope.deck = [{'csCardTitle': 'Titulo',
                    'csCardFamily': 'Familia',
                    'csCardObverse':'./images/exampleImage.png',
                    'csCardReverse':'./images/pokemon-card-backside.png'
                  },
                  {'csCardTitle': 'Titulo2',
                  'csCardFamily': 'Familia2',
                  'csCardObverse':'./images/exampleImage2.png',
                  'csCardReverse':'./images/pokemon-card-backside.png'
                  },
                  {'csCardTitle': 'Titulo3',
                  'csCardFamily': 'Familia3',
                  'csCardObverse':'./images/exampleImage3.png',
                  'csCardReverse':'./images/pokemon-card-backside.png'
                  },
                  {'csCardTitle': 'Titulo4',
                  'csCardFamily': 'Familia4',
                  'csCardObverse':'./images/exampleImage4.png',
                  'csCardReverse':'./images/pokemon-card-backside.png'
                  },
                  {'csCardTitle': 'Titulo5',
                  'csCardFamily': 'Familia5',
                  'csCardObverse':'./images/exampleImage5.png',
                  'csCardReverse':'./images/pokemon-card-backside.png'
                  },
                  {'csCardTitle': 'Titulo6',
                  'csCardFamily': 'Familia6',
                  'csCardObverse':'./images/exampleImage6.png',
                  'csCardReverse':'./images/pokemon-card-backside.png'
                  }];
  }

})();
