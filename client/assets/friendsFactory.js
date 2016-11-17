console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend, callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log("RETURNED DATA",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(id, newfriend, callback){
      $http.put('/friends/' + id, newfriend).then(function(returned_data){

        console.log("UPDATED DATA",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.getFriend = function(id, callback){// what parameters do we need?
        $http.get('/friends/' + id).then(function(returned_data){
          console.log("FOUND FRIEND ",returned_data.data);
          friend = returned_data.data;
          callback(friend);
        })
    };

    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
      $http.delete('/friends/'+id).then(function(){
        console.log("Friend has been Deleted!");
      })
    };
    this.show = function(id, callback){// what parameters do we need?
        $http.get('/friends/' + id).then(function(returned_data){
          console.log("FOUND FRIEND ",returned_data.data);
          friend = returned_data.data;
          callback(friend);
        })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
  }
  return new FriendsFactory();
}]);
