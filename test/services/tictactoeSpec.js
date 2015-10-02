describe('Feature: tictactoe', function() {

    var tictactoe, 
        game; 



    beforeEach(module('tictactoe'));

    beforeEach(inject(function(_tictactoe_) {
        tictactoe = _tictactoe_;
        game   = new APP.entities.Game();
    }));

    describe('.hasWinner', function() {
    
        it("Line 0",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };

            game.field = [
                 [ 1    , 1    , 1  ]
                ,[ null , null ,null]
                ,[ null , null ,null]];
            
            tictactoe.getMove(game,  test);
        });
    });
});