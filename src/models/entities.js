var entities = function () {

  function Board () {
    this.values = [
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}]
    ];
  }

  Board.prototype.constructor = Board;

  return {
    Board : Board
  };
}

APP.entities = entities();