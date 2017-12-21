const app = angular.module('atech', ['ngRoute'] );

app.config(function($routeProvider, $locationProvider) {
  
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/viagens', {
      templateUrl: 'partials/home.html',
      constroller: 'ViagemController'
    })

    .when('/viagens/new', {
      templateUrl: 'partials/viagemForm.html',
      constroller: 'FormController'
    })

    .when('/viagens/edit/:viagemId', {
      templateUrl: 'partials/viagemForm.html',
      constroller: 'FormController'
    })

    .otherwise({ redirectTo: '/viagens'});
})