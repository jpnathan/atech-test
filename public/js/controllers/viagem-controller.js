angular.module('atech').controller('ViagemController', function($scope, $http) {

  $scope.viagens = [];

  $http.get('/v1/viagens')
  .success(function (response) {
    $scope.viagens = response;
  })
  .error(function (err) {
    console.log(err)
  });

  $scope.remover = function (viagem) {
    $http.delete('/v1/viagens/' + viagem._id)
      .success(function () {
        var indiceDaViagem = $scope.viagens.indexOf(viagem);
        $scope.viagens.splice(indiceDaViagem, 1);
        alert('Viagem removida com sucesso!');

      })
      .error(function (erro) {
        console.log(erro);
      });
  };
})