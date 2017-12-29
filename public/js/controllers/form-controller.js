angular.module('atech').controller('FormController', function($scope, $http, $location, $routeParams) {
  
  $scope.viagem = {};
  $scope.msg = '';

  if ($routeParams.viagemId) {
    $http.get('v1/viagens/'+$routeParams.viagemId)
    .success(function(response) {
      $scope.viagem = response;
    })
    .error(function(err) {
      console.log(err);
    })
  }

  $scope.save = function() {
    if ($scope.form.$valid) {
      if ($routeParams.viagemId) {
        
        $http.put('/v1/viagens/' + $scope.viagem._id, $scope.viagem)
        .success(function () {
          alert('Viagem alterada com sucesso');
          $location.path('/viagens')
        })
        .error(function (erro) {
          console.log(erro);
        });
      } else {
        
        $http.post('/v1/viagens', $scope.viagem)
        .success(function() {
          $scope.viagem = {};
          alert('Viagem cadastrada com sucesso');
          $location.path('/viagens')
        })
        .error(function(err) {
          $scope.msg = 'Ocorreu um erro. Tente novamente!';
          console.log(err);
        })
      }
    }
  };
})