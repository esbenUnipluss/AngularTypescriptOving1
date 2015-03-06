
angular.module('crimeWatcherApp.CrimesWithNoLocation', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/CrimesWithNoLocation', {
        templateUrl: 'App/CrimesWithNoLocation/CrimesWithNoLocation.html',
        controller: 'CrimesWithNoLocationCtrl'
    });
}])
    .controller('CrimesWithNoLocationCtrl', [function () {
}]);  