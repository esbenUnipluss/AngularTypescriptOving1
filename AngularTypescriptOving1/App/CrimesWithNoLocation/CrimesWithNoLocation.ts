
angular.module('crimeWatcherApp.CrimesWithNoLocation', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/CrimesWithNoLocation', {
        templateUrl: 'App/CrimesWithNoLocation/CrimesWithNoLocation.html',
        controller: 'CrimesWithNoLocationCtrl'
    });
}])
    .controller('CrimesWithNoLocationCtrl', ['$scope', '$http', '$q', '$location', 'CrimesWithNoLocationService',
    function ($scope, httpService, $q, $location, CrimesWithNoLocationService) {
        $scope.crimes = [];

        var queryParam = $location.search();
        console.log();

        var array = queryParam.date.split(".");
        var date = new Date(array[2], array[1], array[0]);
        var curr_month = date.getMonth();
        var curr_year = date.getFullYear();

        var dateString = curr_year + "-" + curr_month;
        console.log(dateString);

        var force = 'avon-and-somerset';
        var category = queryParam.category;

        $scope.force = "Avon and somerset";
        $scope.category = category;
        $scope.crimeDate = queryParam.date;

        CrimesWithNoLocationService.GetCrimesWithNoLocation(dateString, category, force)
        .then(function(result) {
            $scope.crimes = result;
            console.log(result);
        });

        
}]);  