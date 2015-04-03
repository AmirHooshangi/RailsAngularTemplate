var module  = angular.module('sampleApp',['ngRoute']);

module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/asghar', {
                    templateUrl: '/templates/test'
                });
     }]);
