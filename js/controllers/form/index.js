(function(module){
    function FormController($scope,$http){

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

            $http({
                method: 'POST',
                url: 'json/form_err.json',
                data : $scope.model,
            }).then(function(response) {
                if(response.data){
                    var status = response.data.status;
                    if(status === 'ok'){
                        $scope.mode = 'done';
                    }
                    else{
                        $scope.mode = "edit";
                        $scope.error = true;
                    }
                }
            });
        }
    };
    module.controller("FormController",FormController);
}(module));