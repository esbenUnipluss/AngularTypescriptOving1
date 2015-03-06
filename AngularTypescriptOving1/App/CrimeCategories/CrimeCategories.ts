
angular.module('crimeWatcherApp.CrimeCategories', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/CrimeCategories', {
        templateUrl: 'App/CrimeCategories/CrimeCategories.html',
        controller: 'CrimeCategoriesCtrl'
    });
}])
    .controller('CrimeCategoriesCtrl', ['$scope', '$http', function ($scope, httpService) {

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();
    $scope.selectedDate = "" + curr_date + "." + curr_month + "." + curr_year;
   
    $scope.getCrimeCategoryData = function () {        
        var array = $scope.selectedDate.split(".");
        var date = new Date(array[2], array[1], array[0]);
        var curr_date = date.getDate();
        var curr_month = date.getMonth()+1;
        var curr_year = date.getFullYear();
        console.log(curr_date);
        console.log(curr_month);
        console.log(curr_year);
    };

}]);  