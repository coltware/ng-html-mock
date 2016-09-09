(function(module){
    function Form2Controller($scope,$http,$location){

        $scope.mode = "edit";

        $scope.confirm = function(form,model){
            $scope.error = false;
            if(form.$invalid){
                $scope.error = true;
                return;
            }
            $scope.model = model;
            $scope.mode = 'confirm';
        };
        $scope.submit = function () {


            $scope.mode = 'done';
        }
    };
    module.controller("Form2Controller",Form2Controller);
}(module));