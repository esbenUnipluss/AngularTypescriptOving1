
angular.module('crimeWatcherApp.CrimeCategories', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/CrimeCategories', {
        templateUrl: 'App/CrimeCategories/CrimeCategories.html',
        controller: 'CrimeCategoriesCtrl'
    });
}])
    .controller('CrimeCategoriesCtrl', ['$scope', function ($scope) {

    

}]);  