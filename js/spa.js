var module = angular.module('main',["ngRoute"]);
module.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/:path*', {
        templateUrl : function(path) {
            var random = new Date().getTime();
            var filename = "views/" + path.path + "?_=" + random;
            return filename;
        }
    }).otherwise({
        redirectTo: "/index.html"
    });
});
module.directive('mockHref',function() {
    return {
        scope : {
            'href' : '@mockHref'
        },
        link: function ($scope, $element,$attrs) {
            $element.attr("href","#" + $scope.href);
        }
    }
});