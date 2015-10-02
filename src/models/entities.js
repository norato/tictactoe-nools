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

  return {
    Board  : Board,
    Player : Player
  };
}

APP.entities = entities();