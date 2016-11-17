console.log('EditController is here');
app.controller('editController', ['$scope', '$location', 'friendsFactory', '$routeParams', function($scope, $location, friendsFactory, $routeParams) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
    so we didn't set a variable so we could reuse it -
    we just run the friendsFactory method directly.
  */
   console.log('>>>>>>>>>>>ID>>>>>', $routeParams.id);
   friendsFactory.getFriend($routeParams.id, function(returnedData) {
     $scope.friend = returnedData;
     console.log('OLOLO', $scope.friend);
   })


   $scope.editFriend = function(){
     console.log('>>>>>>>>>>>ID>>>>>', $routeParams.id);
     console.log("ADDING FRIEND", $scope.newFriend);
     friendsFactory.update($routeParams.id, $scope.newFriend, function() {
       console.log($scope.newFriend, " has been edited!");
     })
     $scope.newFriend = {};
     $location.url('/');
   }
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
