
angular.module('crimeWatcherApp.CrimesAtLocation', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/CrimesAtLocation', {
        templateUrl: 'App/CrimesAtLocation/CrimesAtLocation.html',
        controller: 'CrimesAtLocationCtrl'
    });
}])
    .controller('CrimesAtLocationCtrl', [function () {
}]);  