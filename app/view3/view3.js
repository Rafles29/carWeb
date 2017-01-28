/**
 * Created by rwozn on 28.01.2017.
 */

'use strict';

angular.module('myApp.view3', ['ngRoute', 'myApp.reservations'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$rootScope','$scope', 'reservations',function($rootScope,$scope,reservations) {

        $scope.car = $rootScope.selectedCar;
        $scope.myDate = $rootScope.selectedDate;
        $scope.myClient = $rootScope.selectedClient;
        $scope.sended = false;

        $scope.done = function () {
            if($rootScope.selectedCar && $rootScope.selectedDate && $rootScope.selectedClient) {
                reservations.makeReservation($rootScope.selectedCar.ID,$rootScope.selectedClient.ID,$rootScope.selectedDate,function (res) {
                    console.log(res);
                    $scope.sended = true;
                }, function (res) {
                    console.log(res);
                });
            }
        }
    }]);