var module  = angular.module('sampleApp',['ngRoute']);

module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/templates/test', {
                    templateUrl: '/templates/test'
                });
     }]);
