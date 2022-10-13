const UserController = require("./controllers");

module.exports = (app) => {
  app.use("/v1/users", UserController);
};
