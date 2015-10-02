APP.angular.controller('tictactoeCtrl', 
  ['$scope', 'tictactoe', tictactoeCtrl]);

function tictactoeCtrl ($scope, tictactoe) {

  var position;
  $scope.newGame = function () {
    $scope.board = new APP.entities.Board();
    $scope.Players = [
      setPlayer("fa fa-times fa-5x", "red", "Player1"),
      setPlayer("fa fa-genderless fa-5x", "blue", "Player2")];
    position = 0;

  }

  $scope.newGame();
  
  $scope.click = function (cell) {
    if (!cell.Player) {
      cell.Player = getPlayer();
      cell.icon = createIcon(cell.Player);
      tictactoe.getMove($scope.board, callBack);
    };
  };

  function setPlayer (icon, collor, name) {
    var player    = new APP.entities.Player();
    player.Name   = name;
    player.Icon   = icon
    player.Collor = collor;
    return player;
  };

  function getPlayer() {
    if (position <= ($scope.Players.length - 1) ) {
      var player = $scope.Players[position];
      position++;
      return player;
    } else {
      position = 1;
      return $scope.Players[position -1];
    }
  }

  function createIcon (player) {
    return [player.Icon , player.Collor].join(" ");
  }

  function callBack() {
    if($scope.board.winner){
      alert($scope.board.winner.Name);
    }
  }
}