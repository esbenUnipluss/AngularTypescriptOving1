'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('crimeWatcherApp', [
    'ngRoute',
    'crimeWatcherApp.DatePicker',
    'crimeWatcherApp.CrimeCategories',
    'crimeWatcherApp.CrimesAtLocation',
    'crimeWatcherApp.CrimesWithNoLocation',
    

]).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/CrimeCategories' });
}]);