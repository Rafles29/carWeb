/**
 * Created by rwozn on 28.01.2017.
 */

angular.module('myApp.reservations', [])

    .factory('reservations', ['$http', function ($http) {

        function addReservation(carId, clientId, date,callback, error) {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:5000/reservations',
                data: {
                    "date": date,
                    "car_id": carId,
                    "client_id": clientId
                }
            }).then(callback, error);
        }

        return {
            makeReservation:addReservation
        };
    }]);
