var module = angular.module('main',[]);
module.directive('mockHref',function() {
    return {
        scope : {
            'href' : '@mockHref'
        },
        link: function ($scope, $element,$attrs) {
            $element.attr("href","?page=" + $scope.href);
        }
    }
});