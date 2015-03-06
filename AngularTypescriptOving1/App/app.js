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
}]).controller('CrimeCategoriesCtrl', ['$scope', '$http', function ($scope, httpService) {
    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();
    $scope.selectedDate = "" + curr_date + "." + curr_month + "." + curr_year;
    $scope.getCrimeCategoryData = function () {
        var array = $scope.selectedDate.split(".");
        var date = new Date(array[2], array[1], array[0]);
        var curr_date = date.getDate();
        var curr_month = date.getMonth() + 1;
        var curr_year = date.getFullYear();
        console.log(curr_date);
        console.log(curr_month);
        console.log(curr_year);
    };
}]);
app.service('CrimeCategoryService', function () {
    this.selectedDate = new Date();
});
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