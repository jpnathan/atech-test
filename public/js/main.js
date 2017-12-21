angular.module('atech', ['ngRoute'] )
.config(function($routeProvider, $locationProvider) {
  
  $locationProvider.html5Mode(true);

  $routeProvider.when('/viagens', {
    templateUrl: 'partials/home.html',
    constroller: 'ViagemController'
  })

  $routeProvider.when('/viagens/new', {
    templateUrl: 'partials/viagemForm.html',
    constroller: 'FormController'
  })

  $routeProvider.otherwise({ redirectTo: '/viagens'});
})