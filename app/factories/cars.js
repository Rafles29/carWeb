/**
 * Created by rwozn on 26.01.2017.
 */

angular.module('myApp.cars', [])

    .factory('cars', ['$http', function ($http) {
        function getCars(token, callback, error) {
            $http({
                method: 'GET',
                url: 'http://127.0.0.1:5000/cars',
                headers: {
                    "token" : token
                }
            }).then(callback, error);
        }
        function handleCar(method,id,token, callback, error) {
            $http({
                method: method,
                url: 'http://127.0.0.1:5000/cars/' + id,
                headers: {
                    "token" : token
                }
            }).then(callback, error);
        }
        function getCar(id,token,callback, error) {
            handleCar('GET',id,token,callback, error);
        }
        function deleteCar(id,token,callback, error) {
            handleCar('DELETE',id,token,callback, error);
        }
        function nmbCar(id,nmb,token,callback, error) {
            $http({
                method: 'PUT',
                url: 'http://127.0.0.1:5000/cars/' + id,
                headers: {
                    "Content-Type": "application/json",
                    "token" : token
                },
                data: {
                    "nmb": nmb,
                }
            }).then(callback, error);
        }
        function sendCar(token, car,callback, error) {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:5000/cars',
                headers: {
                    "Content-Type": "application/json",
                    "token" : token
                },
                data: {
                    "manufactor": car.manufactor,
                    "model": car.model,
                    "year": car.year,
                    "fuel": car.fuel,
                    "transmission": car.transmission,
                    "ac": car.ac,
                    "short_price": car.short_price,
                    "medium_price": car.medium_price,
                    "long_price": car.long_price,
                    "quantity": car.quantity
                }
            }).then(callback, error);
        }

        return {
            cars: getCars,
            car: getCar,
            deleteCar: deleteCar,
            numberCar: nmbCar,
            addCar: sendCar
        };
    }]);
