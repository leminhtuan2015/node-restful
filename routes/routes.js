module.exports = function(router){
  require("./userRoute")(router);
  require("./productRoute")(router);
}