angular.module('atech').controller('ViagemController', function($scope, $http) {

  $scope.fotos = [];
  
  $http.get('/v1/viagens')
    .then(function (response) {
      console.log(response);
      $scope.fotos = response;
    })
    .catch(function (err) {
      console.log(err)
    });

})