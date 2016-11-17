console.log('NewController is here');
app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/

  $scope.minDate = "1900-01-01";
  $scope.maxDate = new Date();

   var index = function(){
                        friendsFactory.index(function(returnedData){
                          for(var i=0; i<returnedData.friends.length; i++){
                              var date = new Date(returnedData.friends[i]["birthday"]);
                              if((date.getDate() <= 9) || (date.getMonth() <= 8)){
                                console.log(">>>>>>>>IF");
                                if((date.getDate() <= 9) && (date.getMonth() <= 8)){
                                  console.log(">>>>>>>>IF1.1");
                                  returnedData.friends[i]["birthday"]  = "0" + (date.getMonth()+1) + ".0" + date.getDate() + "." + date.getFullYear();
                                }
                                else if (date.getDate() <= 9){
                                  console.log(">>>>>>>>IF1.2");
                                  returnedData.friends[i]["birthday"]  = (date.getMonth()+1) + ".0" + date.getDate() + "." + date.getFullYear();
                                }
                                else if(date.getMonth() <= 8){
                                  console.log(">>>>>>>>IF1.3");
                                  console.log(date.getMonth());
                                  returnedData.friends[i]["birthday"]  = "0" + (date.getMonth()+1) + "." + date.getDate() + "." + date.getFullYear();
                                }
                              }
                              else{
                                console.log(">>>>>>>>ELSE");
                                returnedData.friends[i]["birthday"]  = (date.getMonth()+1) + "." + date.getDate() + "." + date.getFullYear();
                              }
                          }
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
    index();

   $scope.addFriend = function(){

     console.log("ADDING FRIEND", $scope.newFriend);
     friendsFactory.create($scope.newFriend, function() {
       console.log($scope.newFriend, " has been created!");
     })
     $scope.newFriend = {};
     $location.url('/');

   }

   $scope.removeFriend = function(friend){
     console.log("REMOVING FRIEND", friend._id);
     if(confirm("DO you want to delete " + friend.first + " " + friend.last + "?")){
       friendsFactory.delete(friend._id, function() {
         console.log(friend, " has been deleted!");
       })
      index();
     }
     else{
      console.log("CANCELLED");
      $location.url('/');
     }
   }

/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
}]);
