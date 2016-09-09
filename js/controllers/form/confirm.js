(function(module){
    function FormConfirmController($scope,$http,$location){
        $http({
            method: 'GET',
            url: 'json/form.json'
        }).then(function(response) {
            $scope.form = response.data;
        });

        $scope.submit = function(){
            $location.path("/form/done.html");
        }
    };
    module.controller("FormConfirmController",FormConfirmController);
}(module));