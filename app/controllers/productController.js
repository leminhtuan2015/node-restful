var Product = require("../models/product");

module.exports = {
  index: function(request, response){
    response.json({action: "index product", product: Product.x()});
  },

  show: function(request, response){
    response.json({action: "show", id: request.params.id});
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