angular.module('todoList', ['ui.router', 'ngMaterial'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/about');
    
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            //controller: 'loginCtrl'
        });

}]);