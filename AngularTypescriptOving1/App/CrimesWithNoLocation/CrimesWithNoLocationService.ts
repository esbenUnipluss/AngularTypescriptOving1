app.service('CrimesWithNoLocationService', ["$q", "$http", function ($q, $http) {

    this.GetCrimesWithNoLocation = function (dateString, category, force) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://data.police.uk/api/crimes-no-location?category='+category+'&force='+force+'&date='+dateString,
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (error) {
            alert("error");
            deferred.reject(error);
        });
        return deferred.promise;
    }

}]);