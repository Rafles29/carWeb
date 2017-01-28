/**
 * Created by rwozn on 28.01.2017.
 */

angular.module('myApp.clients', [])

    .factory('clients', ['$http', function ($http) {

        function addClient(client,callback, error) {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:5000/clients',
                data: {
                    "first_name": client.first_name,
                    "last_name": client.last_name,
                    "email": client.email,
                    "phone": client.phone,
                    "city": client.city
                }
            }).then(callback, error);
        }

        return {
            addClient:addClient
        };
    }]);
