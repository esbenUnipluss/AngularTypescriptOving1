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
}

}]);