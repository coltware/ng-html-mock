(function(module){
    function controller($scope,$http){
        $http({
            method: 'GET',
            url: 'json/list.json'
        }).then(function(response) {
            $scope.list = response.data.list;
        });
    };
    module.controller("Cat1Page1Controller",controller);
}(module));