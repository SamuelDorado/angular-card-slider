angular.module('card-slider', ['ui.router','ngAnimate','ngTouch', 'angular-carousel'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('slider', {
                url: '/slider',
                controller: 'homeCtrl',
                templateUrl: 'modules/home/home.html'
            });

    }]);
