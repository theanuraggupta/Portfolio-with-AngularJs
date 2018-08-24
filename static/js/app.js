var app = angular.module('anuraggupta', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider.state('home', {
        url: '/home',
        controller: 'homeCtrl',
        breadcrumb: 'Home',
        templateUrl: 'static/html/home.html'
        // template: '<section><div class="panel img-box"><div class=" text-center"><img class="me" src="./img/me.png" alt="alt_img"/></div><div class="row text-center"><h3 class="no-padding">Hi, I"m&nbsp;<span ng-bind="::userInfo.firstName"></span>&nbsp;<span  ng-bind="::userInfo.lastName"></span></h3><h6 class="base-color" style="letter-spacing: 0.2em;margin-bottom: 20px;line-height: 0.8em;font-weight: 700;" ng-bind="::userInfo.designation"></h6><h6 style="line-height: 1.5em;margin-bottom: 20px;letter-spacing: 0.5px;">In love with computer and technology.<br>Visionary and solution finder.<br>Always curious to know about things.<br>Have a look at some of my working <a target="_blank" href="https://github.com/anurag01gupta" title="Github" class="base-color cursor-pointer">projects</a>.<br>Contact me at <a target="_blank" title="https://www.linkedin.com/in/anurag-in-india/" href="https://www.linkedin.com/in/anurag-in-india/">Linkedin</a> or by <a href="mailto:email@anuraggupta.in?Subject=Hello%20Anurag" title="email@anuraggupta.in" class="base-color cursor-pointer">Email</a>. </h6><h6 class="anchor-border"><a href="mailto:email@anuraggupta.in?Subject=Hello%20Anurag" title="email@anuraggupta.in"><i class="far fa-envelope-open"></i></a><a target="_blank" title="Facebook" href="https://www.facebook.com/anuraggupta.zner/"><i class="fab fa-facebook-f"></i></a><a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/anurag-in-india/"><i class="fab fa-linkedin-in"></i></a><a target="_blank" title="Google+" href="https://plus.google.com/u/0/+AnuragGuptaTheOne/"><i class="fab fa-google-plus-g"></i></a><a target="_blank" href="https://github.com/anurag01gupta" title="Github"><i class="fab fa-github"></i></a></h6></div></div></section>'
    });
    $urlRouterProvider.otherwise('/home');
}]);
app.controller("aController", ['$scope', function($scope){
   $scope.userInfo = {
       firstName: "Anurag",
       lastName: "Gupta",
       designation: "Programmer / Web Developer",
       description:""
   };
}]);
app.controller('homeCtrl', ['$scope', function($scope){
    console.log('home controller');
}]);