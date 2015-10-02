describe('tictactoeCtrl', function() {
  var $scope;
  
  beforeEach(function() {
    module('tictactoe');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
    })
  });

  it('Initialize Game', 
    inject(function($controller) {
      $controller('tictactoeCtrl', {"$scope" : $scope});
      expect($scope.Players.length).toEqual(2);
    })
  );
});