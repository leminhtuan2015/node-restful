var productController = require("../app/controllers/productController");

module.exports = function(router){
  router.get("/products", function(request, response){
    productController.index(request, response)
  });

  router.get("/products/:id", function(request, response){
    productController.show(request, response)
  });

  router.post("/products", function(request, response){
    productController.create(request, response)
  });

  router.put("/products/:id", function(request, response){
    productController.update(request, response)
  });

  router.delete("/products/:id", function(request, response){
    productController.delete(request, response)
  });
}