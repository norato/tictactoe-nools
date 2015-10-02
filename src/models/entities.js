var entities = function () {

  function Board () {
    this.values = initBoard();
    this.ends = false;
    this.winner = null;
    
  }
  Board.prototype.constructor = Board;

  function Cell() {
    this.Player = null;
    this.Icon = null;
  }

  function initBoard() {
    var board = []
    for (var row = 0; row <= 2 ; row++) {
      board[row] = [];
      for (var cell = 0; cell <= 2 ; cell++) {
        board[row][cell] = new Cell();
      }
    }
    return board;
  }

  function Player () {
    this.Name   = null;
    this.Icon   = null;
    this.Collor = null;
  }

  Player.prototype.constructor = Player;

  return {
    Board  : Board,
    Player : Player
  };
}

APP.entities = entities();