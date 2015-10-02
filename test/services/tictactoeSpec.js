xdescribe('Feature: tictactoe', function() {

    var tictactoe, 
        game; 



    beforeEach(module('APP'));

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
        it("Line 0",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ 0    , 0    , 0  ]
                ,[ null , null ,null]
                ,[ null , null ,null]];
            
            tictactoe.getMove(game,  test);
        });
        it("Line 1",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ null , null ,null]
                ,[ 0    , 0    , 0  ]
                ,[ null , null ,null]];
            
            tictactoe.getMove(game,  test);
        });
        it("Line 2",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ null , null ,null]
                ,[ null , null ,null]
                ,[ 0    , 0    , 0  ]];
            
            tictactoe.getMove(game,  test);
        });
        it("Column 0",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ 0 , null , null ]
                ,[ 0 , null , null ]
                ,[ 0 , 0    , null ]];
            
            tictactoe.getMove(game,  test);
        });
        it("Column 1",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ null , 0 , null ]
                ,[ 0    , 0 , null ]
                ,[ 0    , 0 , null ]];
            
            tictactoe.getMove(game,  test);
        });
        it("Column 2",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ null , null , 0 ]
                ,[ 0    , null , 0 ]
                ,[ 0    , null , 0 ]];
            
            tictactoe.getMove(game,  test);
        });
        it("Diagonal 1",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ 0    , null , null ]
                ,[ null ,  0   , 0    ]
                ,[ 0    , null , 0    ]];
            
            tictactoe.getMove(game,  test);
        });
        it("Diagonal 2",function(done){
            var test=function() {
                expect(game.ends).toEqual(true);
                done();
            };
            
            game.field = [
                 [ 0    , null ,  0   ]
                ,[ null ,  0   ,  0   ]
                ,[ 0    , null , null ]];
            
            tictactoe.getMove(game,  test);
        });
    });

    xdescribe('Find move to win', function() {
        describe("Line 0", function() {
            it('Move 0 2',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:2});
                    done();
                };

                game.field = [
                     [ 0    , 0    , null  ]
                    ,[ null , null ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 0 1',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:1});
                    done();
                };

                game.field = [
                     [ 0    , null , 0  ]
                    ,[ null , null ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 0 0',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:0});
                    done();
                };

                game.field = [
                     [ null , 0    , 0  ]
                    ,[ null , null ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe("Line 1", function() {
            it('Move 1 2',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:2});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ 0    , 0    ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 1 1',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ 0    , null , 0  ]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 1 0',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:0});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , 0    , 0  ]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe("Line 2", function() {
            it('Move 2 2',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:2});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , null ,null]
                    ,[ 0    , 0    ,null]
                    ];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 2 1',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:1});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , null ,null]
                    ,[ 0    , null , 0  ]
                    ];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 2 0',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:0});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , null ,null]
                    ,[ null ,  0   , 0  ]
                    ];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe('Column 0', function() {
            it("Move 2 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:0});
                    done();
                };
                
                game.field = [
                     [ 0    , null , null ]
                    ,[ 0    , null , null ]
                    ,[ null , 0    , null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 1 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:0});
                    done();
                };
                
                game.field = [
                     [ 0    , null , null ]
                    ,[ null , null , null ]
                    ,[  0   , null , null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 0 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:0});
                    done();
                };
                
                game.field = [
                     [ null, null , null ]
                    ,[ 0   , null , null ]
                    ,[ 0   , null , null ]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe('Column 1', function() {
            it("Move 2 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:1});
                    done();
                };
                
                game.field = [
                     [ null , 0   , null ]
                    ,[ null , 0   , null ]
                    ,[ null , null, null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 1 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };
                
                game.field = [
                     [ null , 0   , null ]
                    ,[ null , null, null ]
                    ,[ null , 0   , null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 0 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:1});
                    done();
                };
                
                game.field = [
                     [ null , null, null ]
                    ,[ null , 0   , null ]
                    ,[ null , 0   , null ]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe('Column 2', function() {
            it("Move 2 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:2});
                    done();
                };
                
                game.field = [
                     [ null , null, 0 ]
                    ,[ null , null, 0 ]
                    ,[ null , null, null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 1 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:2});
                    done();
                };
                
                game.field = [
                     [ null , null, 0    ]
                    ,[ null , null, null ]
                    ,[ null , null, 0    ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 0 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:2});
                    done();
                };
                
                game.field = [
                     [ null , null, null ]
                    ,[ null , null, 0    ]
                    ,[ null , null, 0    ]];
                tictactoe.getMove(game,  test);
            });
        });
        describe('Diagonal1', function() {
            it("Move 2 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:2});
                    done();
                };
                
                game.field = [
                     [ 0    , 1 , 1   ]
                    ,[ null , 0 , null]
                    ,[ 1    , 0 , null]];
                tictactoe.getMove(game,  test);
            });
            it("Move 1 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };
                
                game.field = [
                     [ 0 , 1   , 1   ]
                    ,[ 0 , null, null]
                    ,[ 1 , 0   , 0   ]];
                tictactoe.getMove(game,  test);
            });
            it("Move 0 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:0});
                    done();
                };
                
                game.field = [
                     [ null, 1 , 1   ]
                    ,[ 0   , 0 , null]
                    ,[ 1   , 0 , 0   ]];
                tictactoe.getMove(game,  test);
            });
        });
        describe('Diagonal2', function() {
            it("Move 2 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:0});
                    done();
                };
                
                game.field = [
                 [ null , null ,  0   ]
                ,[ null ,  0   , null ]
                ,[ null , null , null ]];
            
                tictactoe.getMove(game,  test);
            });
            it("Move 1 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };
                
                game.field = [
                 [ null , null , 0    ]
                ,[ null , null , null ]
                ,[ 0    , null , null ]];
            
                tictactoe.getMove(game,  test);
            });
            it("Move 0 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:2});
                    done();
                };
                
                game.field = [
                 [ null , null , null ]
                ,[ null ,  0   , null ]
                ,[ 0    , null , null ]];
            
                tictactoe.getMove(game,  test);
            });
        });
    });

    xdescribe('Block Opponent to win', function() {
        describe("Line 0", function() {
            it('Move 0 2',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:2});
                    done();
                };

                game.field = [
                     [ 1    , 1    , null  ]
                    ,[ null , null ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 0 1',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:1});
                    done();
                };

                game.field = [
                     [ 1    , null , 1  ]
                    ,[ null , null ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 0 0',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:0});
                    done();
                };

                game.field = [
                     [ null , 1    , 1  ]
                    ,[ null , null ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe("Line 1", function() {
            it('Move 1 2',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:2});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ 1    , 1    ,null]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 1 1',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ 1    , null , 1  ]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 1 0',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:0});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , 1    , 1  ]
                    ,[ null , null ,null]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe("Line 2", function() {
            it('Move 2 2',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:2});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , null ,null]
                    ,[ 1    , 1    , null  ]
                    ];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 2 1',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:1});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , null ,null]
                    ,[ 1    , null , 1  ]
                    ];
                
                tictactoe.getMove(game,  test);
            });
            it('Move 2 0',function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:0});
                    done();
                };

                game.field = [
                     [ null , null ,null]
                    ,[ null , null ,null]
                    ,[ null , 1    , 1  ]
                    ];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe('Column 0', function() {
            it("Move 2 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:0});
                    done();
                };
                
                game.field = [
                     [ 1    , null , null ]
                    ,[ 1    , null , null ]
                    ,[ null , null , null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 1 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:0});
                    done();
                };
                
                game.field = [
                     [ 1    , null , null ]
                    ,[ null , null , null ]
                    ,[  1   , null , null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 0 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:0});
                    done();
                };
                
                game.field = [
                     [ null, null , null ]
                    ,[ 1   , null , null ]
                    ,[ 1   , null , null ]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe('Column 1', function() {
            it("Move 2 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:1});
                    done();
                };
                
                game.field = [
                     [ null , 1   , null ]
                    ,[ null , 1   , null ]
                    ,[ null , null, null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 1 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };
                
                game.field = [
                     [ null , 1   , null ]
                    ,[ null , null, null ]
                    ,[ null , 1   , null ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 0 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:1});
                    done();
                };
                
                game.field = [
                     [ null , null, null ]
                    ,[ null , 1   , null ]
                    ,[ null , 1   , null ]];
                
                tictactoe.getMove(game,  test);
            });
        });
        describe('Column 2', function() {
            it("Move 2 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:2});
                    done();
                };
                
                game.field = [
                     [ null , null, 1   ]
                    ,[ null , null, 1   ]
                    ,[ null , null, null]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 1 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:2});
                    done();
                };
                
                game.field = [
                     [ null , null, 1   ]
                    ,[ null , null, null]
                    ,[ null , null, 1   ]];
                
                tictactoe.getMove(game,  test);
            });
            it("Move 0 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:2});
                    done();
                };
                
                game.field = [
                     [ null , null, null]
                    ,[ null , null, 1   ]
                    ,[ null , null, 1   ]];
                tictactoe.getMove(game,  test);
            });
        });
        describe('Diagonal1', function() {
            it("Move 2 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:2});
                    done();
                };
                
                game.field = [
                     [ 1 , 0 , 1   ]
                    ,[ 0 , 1 , null]
                    ,[ 0 , 0 , null]];
                tictactoe.getMove(game,  test);
            });
            it("Move 1 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };
                
                game.field = [
                     [ 1 , 0    , 1  ]
                    ,[ 0 , null ,null]
                    ,[ 0 , 0    , 1  ]];
                tictactoe.getMove(game,  test);
            });
            it("Move 0 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:0});
                    done();
                };
                
                game.field = [
                     [ null , 0 , 1   ]
                    ,[ 0    , 1 , null]
                    ,[ 0    , 0 , 1   ]];
                tictactoe.getMove(game,  test);
            });
        });
        describe('Diagonal2', function() {
            it("Move 2 0",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:2, j:0});
                    done();
                };
                
                game.field = [
                 [ null , null ,  1   ]
                ,[ null ,  1   ,  null]
                ,[ null , null , null ]];
            
                tictactoe.getMove(game,  test);
            });
            it("Move 1 1",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:1, j:1});
                    done();
                };
                
                game.field = [
                 [ null , null ,  1   ]
                ,[ null , null , null ]
                ,[ 1    , null , null ]];
            
                tictactoe.getMove(game,  test);
            });
            it("Move 0 2",function(done){
                var test=function() {
                    expect(game.move).toEqual({i:0, j:2});
                    done();
                };
                
                game.field = [
                 [ null , null ,  null ]
                ,[ null ,  1   ,  null ]
                ,[ 1    , null ,  null ]];
            
                tictactoe.getMove(game,  test);
            });
        });
    });

    xdescribe('Win is better than block Opponent', function() {
        describe('Line0', function() {
            describe('Move 0 0', function() {
                describe('Line1 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ 1    , 1    , null]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ 1    , null , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ null , 1    , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                });
                describe('Line2 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , 1    , null]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , null , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ null , null , null]
                            ,[ null , 1    , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                });
            });
            describe('Move 0 1', function() {
                describe('Line1 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ 1    , 1    , null]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ 1    , null , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , 1    , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                });
                describe('Line2 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , 1    , null]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , null , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , null , null]
                            ,[ null , 1    , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                });
            });
            describe('Move 0 2', function() {
                describe('Line1 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ 1    , 1    , null]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ 1    , null , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , 1    , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                });
                describe('Line2 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , null , null]
                            ,[ 1    , 1    , null]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , null , null]
                            ,[ 1    , null , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , null , null]
                            ,[ null , 1    , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                });
            });
        });
        describe('Line1', function() {
            describe('Move 1 0', function() {
                describe('Line0 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:1, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 1    , 1    , null]
                            ,[ null , 0    , 0   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:1, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 1    , null , 1   ]
                            ,[ null , 0    , 0   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:1, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 1    , 1   ]
                            ,[ null , 0    , 0   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                });
                xdescribe('Line2 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , 1    , null]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , null , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:0});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ null , 0    , 0   ]
                            ,[ null , null , null]
                            ,[ null , 1    , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                });
            });
            xdescribe('Move 0 1', function() {
                describe('Line1 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ 1    , 1    , null]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ 1    , null , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , 1    , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                });
                describe('Line2 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , 1    , null]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , null , null]
                            ,[ 1    , null , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:1});
                            done();
                        };

                        game.field = [
                             [ 0    , null , 0   ]
                            ,[ null , null , null]
                            ,[ null , 1    , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                });
            });
            xdescribe('Move 0 2', function() {
                describe('Line1 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ 1    , 1    , null]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ 1    , null , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , 1    , 1   ]
                            ,[ null , null , null]];
                        
                        tictactoe.getMove(game, test);
                    });
                });
                xdescribe('Line2 in', function() {
                    it('[ 1 , 1 , null]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , null , null]
                            ,[ 1    , 1    , null]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ 1 , null , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , null , null]
                            ,[ 1    , null , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                    it('[ null , 1 , 1]',function(done){
                        var test=function() {
                            expect(game.move).toEqual({i:0, j:2});
                            expect(game.ends).toEqual(true);
                            done();
                        };

                        game.field = [
                             [ 0    , 0    , null]
                            ,[ null , null , null]
                            ,[ null , 1    , 1   ]
                            ];
                        
                        tictactoe.getMove(game, test);
                    });
                });
            });
        });
    });

});