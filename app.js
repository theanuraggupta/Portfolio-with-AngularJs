var app = angular.module('anuraggupta', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    'use strict';
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }
    // stop cache data storage for browsers
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    $stateProvider.state('/', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'mainController'
    });
    $stateProvider.state('archive', {
        url: '/archive',
        templateUrl: 'archive.html',
        controller: 'mainController'
    });
    $urlRouterProvider.otherwise('/');
}]);
app.controller("mainController", ['$scope', '$state', function($scope, $state){
    $scope.$state = $state;
    $scope.userInfo = {
        firstName: "Anurag",
        lastName: "Gupta",
        designation: "Programmer / Web Developer",
        description:""
    };

    $scope.posts = [{
        title: "Angular Js",
        href: "angularjs",
        contents: [{
            subtitle: "Difference between One way and Two way data binding"
        }]
    }];
}]);