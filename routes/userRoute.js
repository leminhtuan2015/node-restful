var userController = require("../app/controllers/userController");

module.exports = function(router){
  router.get("/users", function(request, response){
    userController.index(request, response)
  });

  router.get("/users/:id", function(request, response){
    userController.show(request, response)
  });

  router.post("/users", function(request, response){
    userController.create(request, response)
  });

  router.put("/users/:id", function(request, response){
    userController.update(request, response)
  });

  router.delete("/users/:id", function(request, response){
    userController.delete(request, response)
  });
}