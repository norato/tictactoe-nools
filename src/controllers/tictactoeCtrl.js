APP.angular.controller('tictactoeCtrl', 
  ['$scope',tictactoeCtrl]);

function tictactoeCtrl ($scope) {
  $scope.board = new APP.entities.Board();

  var iconX = "fa fa-times fa-5x";
  var iconO = "fa fa-genderless fa-5x";
  var pogVar = true;

  $scope.click = function (cell) {
    cell.icon = pogVar ? iconX : iconO;
    pogVar = !pogVar;
  }
}