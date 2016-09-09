(function(module){
    function FormController($scope,$http,$location){

        console.log("form.....");

        $scope.confirm = function(){
            console.log("submit",$scope.form);
            $scope.error = false;

            if($scope.form.$invalid){
                console.log("submit",$scope.error);
                $scope.error = true;
                return;
            }

            $location.path("/form/confirm.html");
        };
    };
    module.controller("FormController",FormController);
}(module));