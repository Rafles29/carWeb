'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.clients'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$rootScope','$scope', '$location','clients',function($rootScope,$scope, $location, clients) {



  $scope.submitClient = function ()  {

      var client = {
          "first_name": $scope.first_name,
          "last_name": $scope.last_name,
          "email": $scope.email,
          "phone": $scope.phone,
          "city": $scope.city
      };
      clients.addClient(client, function (res) {
          $rootScope.selectedClient =  res.data;
          $rootScope.selectedDate =  $scope.date;
          $location.url('/view3');

      }, function (res) {
          console.log(res)
      });
      $scope.first_name = "";
      $scope.last_name = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.city = "";
  }


}]);