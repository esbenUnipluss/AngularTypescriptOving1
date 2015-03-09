'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('crimeWatcherApp', [
    'ngRoute',
    'crimeWatcherApp.CrimeCategories',
    'crimeWatcherApp.CrimesWithNoLocation',
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/CrimeCategories' });
}]);
angular.module('crimeWatcherApp.CrimeCategories', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/CrimeCategories', {
        templateUrl: 'App/CrimeCategories/CrimeCategories.html',
        controller: 'CrimeCategoriesCtrl'
    });
}]).controller('CrimeCategoriesCtrl', ['$scope', '$http', '$q', 'CrimeCategoryService', function ($scope, httpService, $q, CrimeCategoryService) {
    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth() + 1;
    var curr_year = today.getFullYear() - 2; //api er ikke oppdatert med 2015 enda, 
    $scope.selectedDate = "" + curr_date + "." + curr_month + "." + curr_year;
    $scope.CategoryData = [];
    $scope.getCrimeCategoryData = function () {
        var array = $scope.selectedDate.split(".");
        var date = new Date(array[2], array[1], array[0]);
        var curr_date = date.getDate();
        var curr_month = date.getMonth();
        var curr_year = date.getFullYear();
        var dateString = curr_year + "-" + curr_month;
        console.log(dateString);
        CrimeCategoryService.GetCrimeCategories(dateString).then(function (result) {
            $scope.CategoryData = result;
            console.log(result);
        });
    };
}]);
app.service('CrimeCategoryService', ["$q", "$http", function ($q, $http) {
    this.GetCrimeCategories = function (dateString) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://data.police.uk/api/crime-categories',
            params: 'date=' + dateString,
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (error) {
            alert("error");
            deferred.reject(error);
        });
        return deferred.promise;
    };
}]);
angular.module('crimeWatcherApp.CrimesWithNoLocation', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/CrimesWithNoLocation', {
        templateUrl: 'App/CrimesWithNoLocation/CrimesWithNoLocation.html',
        controller: 'CrimesWithNoLocationCtrl'
    });
}]).controller('CrimesWithNoLocationCtrl', ['$scope', '$http', '$q', '$location', 'CrimesWithNoLocationService', function ($scope, httpService, $q, $location, CrimesWithNoLocationService) {
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
    CrimesWithNoLocationService.GetCrimesWithNoLocation(dateString, category, force).then(function (result) {
        $scope.crimes = result;
        console.log(result);
    });
}]);
app.service('CrimesWithNoLocationService', ["$q", "$http", function ($q, $http) {
    this.GetCrimesWithNoLocation = function (dateString, category, force) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://data.police.uk/api/crimes-no-location?category=' + category + '&force=' + force + '&date=' + dateString,
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (error) {
            alert("error");
            deferred.reject(error);
        });
        return deferred.promise;
    };
}]);
//# sourceMappingURL=app.js.map