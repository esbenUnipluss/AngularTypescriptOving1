'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('crimeWatcherApp', [
    'ngRoute',
    'crimeWatcherApp.DatePicker',
    'crimeWatcherApp.CrimeCategories',
    'crimeWatcherApp.CrimesAtLocation',
    'crimeWatcherApp.CrimesWithNoLocation',
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/CrimeCategories' });
}]);
angular.module('crimeWatcherApp.DatePicker', ['ngRoute', 'ui.bootstrap']).controller('DatepickerDemoCtrl', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();
    $scope.clear = function () {
        $scope.dt = null;
    };
    $scope.disabled = function (date, mode) {
        return false;
    };
    $scope.toggleMin = function () {
        $scope.minDate = new Date(2000, 1, 1);
    };
    $scope.toggleMin();
    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[3];
});
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
angular.module('crimeWatcherApp.CrimesAtLocation', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/CrimesAtLocation', {
        templateUrl: 'App/CrimesAtLocation/CrimesAtLocation.html',
        controller: 'CrimesAtLocationCtrl'
    });
}]).controller('CrimesAtLocationCtrl', [function () {
}]);
angular.module('crimeWatcherApp.CrimesWithNoLocation', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/CrimesWithNoLocation', {
        templateUrl: 'App/CrimesWithNoLocation/CrimesWithNoLocation.html',
        controller: 'CrimesWithNoLocationCtrl'
    });
}]).controller('CrimesWithNoLocationCtrl', [function () {
}]);
//# sourceMappingURL=app.js.map