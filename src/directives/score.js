APP.angular.directive('score', function(){
  return {
    scope: {
      winner: '=',
      players: '=',
      action: '&'
    },
    restrict: 'E',
    templateUrl: 'directives/score.html'
  };
});