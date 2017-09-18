angular.module('todoList', ['ui.router', 'ngMaterial'])

.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    
    $mdThemingProvider.theme('altTheme').primaryPalette('orange');

    $urlRouterProvider.otherwise('/about');
    
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'tasksCtrl'
        })

        .state('addTask', {
            url: '/addTask',
            templateUrl: 'views/addTask.html',
            controller: 'tasksCtrl'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
        });

}]);