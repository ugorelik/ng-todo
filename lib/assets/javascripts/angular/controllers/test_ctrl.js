var app = angular.module("UgModule");

app.controller("test_ctrl", ["$scope", function ($scope) {
  $scope.test = "Hello me";
}]);