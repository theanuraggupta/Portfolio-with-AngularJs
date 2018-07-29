var app = angular.module('anuraggupta', []);
app.controller("aController", function($scope){
   $scope.userInfo = {
       firstName: "Anurag",
       lastName: "Gupta",
       designation: "Web Developer",
       description:""
   }; 
    
});