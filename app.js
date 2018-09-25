var app = angular.module('anuraggupta', ['ui.router', 'ncy-angular-breadcrumb']);
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
        controller: 'mainController',
        ncyBreadcrumb: {
          label: 'Home'
        }
    });
    $stateProvider.state('archive', {
        url: '/archive',
        templateUrl: 'archive.html',
        controller: 'mainController',
        ncyBreadcrumb: {
          label: 'Archive'
        }
    });
    $stateProvider.state('archive.angularjs', {
        url: '/angularjs',
        templateUrl: 'angularjs.html',
        controller: 'mainController',
        ncyBreadcrumb: {
          label: 'AngularJs'
        }
    });
    $stateProvider.state('archive.css', {
        url: '/css',
        templateUrl: 'css.html',
        controller: 'mainController',
        ncyBreadcrumb: {
          label: 'Css'
        }
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

    $scope.articals = [
        {
            title: "Css",
            ui_sref: "archive.css",
            subtitles: [{
                title: "Box Model"
            }]
        },
        {
            title: "Angular Js",
            ui_sref: "archive.angularjs",
            subtitles: [{
                title: "Difference between One way and Two way data binding"
            }]
        }
]   ;
}]);