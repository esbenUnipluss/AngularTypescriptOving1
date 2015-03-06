'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('crimeWatcherApp', [
    'ngRoute',
    'crimeWatcherApp.CrimeCategories',
    'crimeWatcherApp.CrimesAtLocation',
    'crimeWatcherApp.CrimesWithNoLocation',
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/CrimeCategories' });
}]);
angular.module('crimeWatcherApp.CrimesWithNoLocation', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/CrimesWithNoLocation', {
        templateUrl: 'App/CrimesWithNoLocation/CrimesWithNoLocation.html',
        controller: 'CrimesWithNoLocationCtrl'
    });
}]).controller('CrimesWithNoLocationCtrl', [function () {
}]);
angular.module('crimeWatcherApp.CrimesAtLocation', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/CrimesAtLocation', {
        templateUrl: 'App/CrimesAtLocation/CrimesAtLocation.html',
        controller: 'CrimesAtLocationCtrl'
    });
}]).controller('CrimesAtLocationCtrl', [function () {
}]);
angular.module('crimeWatcherApp.CrimeCategories', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/CrimeCategories', {
        templateUrl: 'App/CrimeCategories/CrimeCategories.html',
        controller: 'CrimeCategoriesCtrl'
    });
}]).controller('CrimeCategoriesCtrl', ['$scope', function ($scope) {
}]);
//# sourceMappingURL=app.js.map