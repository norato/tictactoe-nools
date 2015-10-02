APP.angular.service('tictactoe', [ 'lodash', tictactoe]);

function tictactoe( _ ) {
    var self=this;
    var flow =null;
    var rules=null;

    $.ajax({
        async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
        cache: false,
        dataType: 'text',
        contentType: "text/plain; charset=utf-8",
        url: 'resources/rules/tictactoe.txt',
        success: function (data) {
            rules = data;
        },
        error: function ($xhr, status, err) {
            console.log('Could not load rules', status, err);
            throw new Error('Could not load rules');
        }
    });

    if (!nools.hasFlow('tictactoe'))
    {
        flow=nools.compile(rules, {
            define: {
                //The person class the flow should use
                Game   : APP.entities.Game 
            },
            scope: {
                //the logger you want your flow to use.
                logger: console.log
            },
            name: 'tictactoe'
        });
    }
    else
    {
        flow=nools.getFlow('tictactoe');
    }

    self.getMove = function (game,successCallback)
    {
        var session = flow.getSession();
        session.assert(game);

        session.match(function(err){
            if(err){
                console.error(err.stack);
            }else{
                //database.saveDatabase();
                successCallback();
            }
        });

    };
    return self;
}
