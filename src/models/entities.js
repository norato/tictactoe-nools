var entities = function () {

  function Board () {
    this.values = [
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}]
    ];
  }

  Board.prototype.constructor = Board;

  function Player () {
    this.Name   = null;
    this.Icon   = null;
    this.Collor = null;
  }

  Player.prototype.constructor = Player;

 function Game () {
      this.field  = null;
      this.move   = null;
      this.winner = null;
      this.ends   = false; 
      this.icon   = 0;
  }

  return {
    Board  : Board,
    Game : Game,
    Player : Player
  };
}

APP.entities = entities();