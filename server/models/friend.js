console.log('FRIENDS MODEL IS HERE');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var NewSchema = new mongoose.Schema({
  first: String,
  last: String,
  birthday: Date
})
// register the schema as a model
var Friend = mongoose.model('Friend', NewSchema);
