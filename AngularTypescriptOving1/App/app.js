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
    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };
    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
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
}]).controller('CrimeCategoriesCtrl', ['$scope', function ($scope) {
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