
angular.module('crimeWatcherApp.CrimeCategories', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/CrimeCategories', {
        templateUrl: 'App/CrimeCategories/CrimeCategories.html',
        controller: 'CrimeCategoriesCtrl'
    });
}])
    .controller('CrimeCategoriesCtrl', ['$scope', '$http', '$q','CrimeCategoryService',
    function ($scope, httpService, $q, CrimeCategoryService) {

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth()+1;
    var curr_year = today.getFullYear() -2; //api er ikke oppdatert med 2015 enda, 
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

        CrimeCategoryService.GetCrimeCategories(dateString)
            .then(function (result) {
                $scope.CategoryData = result;
                console.log(result);    
        });
        

        
    };

}]);  