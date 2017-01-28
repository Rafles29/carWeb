'use strict';

angular.module('myApp.view1', ['ngRoute','myApp.cars'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$rootScope','$scope', 'cars',function($rootScope,$scope, cars) {
    cars.cars('8c05904f0051419283d1024fc5ce1a59',function (res) {
        $scope.allCars = res.data;
    }, function (res) {
        console.log(res);
    });
    $scope.selectCar = function (nmb) {
        $rootScope.selectedCar = $scope.allCars[nmb];
        //console.log($rootScope.selectedCar);
    };

}]);