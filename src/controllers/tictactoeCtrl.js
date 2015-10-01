APP.angular.controller('tictactoeCtrl', 
  ['$scope',tictactoeCtrl]);

function tictactoeCtrl ($scope) {
  $scope.newGame = function () {
    $scope.board = new APP.entities.Board();
  }

  $scope.newGame();
  
  var iconX = "fa fa-times fa-5x red";
  var iconO = "fa fa-genderless fa-5x blue";
  var pogVar = true;

  $scope.click = function (cell) {
    cell.icon = pogVar ? iconX : iconO;
    pogVar = !pogVar;
  };

}