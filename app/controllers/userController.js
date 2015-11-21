var User = require("../models/user");

module.exports = {
  index: function(request, response){
    //db.users.find()
    //response.json({action: "index hello hi"});
    var nick = new User({name: 'Nick 11', password: 'password'});
    nick.save(function(err) {
      if (err) throw err;
      console.log('User saved successfully');
      response.json({ success: true });
    });
  },

  show: function(request, response){
    //response.json({action: "show", id: request.params.id});
    User.find({}, function(err, users) {
      response.json(users);
    });
  },

  create: function(request, response){
    response.json({action: "create", data: request.body});
  },

  update: function(request, response){
    response.json({action: "update", id: request.params.id});
  },

  delete: function(request, response){
    response.json({action: "delete", id: request.params.id});
  }
}
