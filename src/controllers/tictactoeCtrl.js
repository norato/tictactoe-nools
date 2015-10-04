APP.angular.controller('tictactoeCtrl', 
  ['$scope', 'tictactoe', tictactoeCtrl]);

function tictactoeCtrl ($scope, tictactoe) {

  var position;
  $scope.Player1 = setPlayer("fa fa-times", "red", "Player1");
  $scope.Player2 = setPlayer("fa fa-genderless", "blue", "Player2");

  $scope.Players = [$scope.Player1, $scope.Player2];
  $scope.newGame = function () {
    $scope.board = new APP.entities.Board();
    position = 0;

  }

  $scope.newGame();
  
  $scope.click = function (cell) {
    if ($scope.board.winner) {
      $scope.newGame();
    } else if (!cell.Player) {
      cell.Player = getPlayer();
      cell.Icon = cell.Player.getIcon();
      tictactoe.getMove($scope.board, callBack);
    }
  };

  function setPlayer (icon, color, name) {
    var player    = new APP.entities.Player();
    player.Name   = name;
    player.Icon   = icon
    player.Color  = color;
    return player;
  };

  $scope.getPlayer = getPlayer;

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


  function callBack() {
    if($scope.board.winner){
      $scope.board.winner.Score++; 
    }
  }
}