console.log('ShowoneController is here');
app.controller('showoneController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {


     console.log('>>>>>>>>>>>ID>>>>>', $routeParams.id);
     friendsFactory.show($routeParams.id, function(returnedData) {
       $scope.friend = returnedData;
       console.log('friend is found and displayed!', $scope.friend);
     })
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
