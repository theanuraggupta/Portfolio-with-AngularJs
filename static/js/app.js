var app = angular.module('anuraggupta', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    'use strict';
    $stateProvider.state('/', {
        url: '/',
        templateUrl: 'static/html/home.html'
    });
    $stateProvider.state('archive', {
        url: '/archive',
        templateUrl: 'static/html/archive.html'
    });
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
    $urlRouterProvider.otherwise('/archive');
}]);
app.controller("aController", ['$scope', '$state', function($scope, $state){
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
    }]
    setTimeout(function(){
        $state.go('archive');
    },50);
}]);