angular.module('atech').controller('FormController', function($scope) {
  
  $scope.viagem = {};

  $scope.save = function() {
    console.log($scope.viagem)
  }
})