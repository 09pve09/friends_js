console.log('FRIENDS CONTROLLER IS HERE');
// WE NEED TO ADD A FEW lines of code here!
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
      if(err) {
        console.log("something went wrong");
        res.json({placeholder: "error"});
      }
      else {
        console.log(friends);
        res.json({friends});
      }
    })
  };
  this.create = function(req,res){
    var friend = new Friend({first: req.body.first, last: req.body.last, birthday: req.body.birthday});
    friend.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      }
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a new friend in friends.js!');
      }
    })
    res.json({placeholder: "success"});
  };
  this.update = function(req,res){
    var id = req.params.id;

    Friend.update({_id: id}, {first: req.body.first, last: req.body.last, birthday: req.body.birthday}, function(err, friends){
      if(err) {
        // console.log(">>>>>>>>>>", err);
        res.redirect('/');
      }
      else{
        console.log("FRIEND WAS UPDATED");
        res.json({placeholder:'update'});
      }
        })
      }
  this.delete = function(req,res){
    id= req.params.id;
    console.log("id is: "+id);
    Friend.remove({_id: id}, function(err){
      if(err) {
        res.json({placeholder:show});
      }
      else{
        res.json({placeholder:'DELETED'});
      }
    })
  };
  this.show = function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err) {
        res.json({err});
      }
      else{
        res.json({friend});
      }
    })
  };
}
module.exports = new FriendsController(); // what does this export?
