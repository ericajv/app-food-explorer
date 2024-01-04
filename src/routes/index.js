const { Router } = require("express");

const usersRouter = require("./users.routes");
const platesRoutes = require("./plates.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/plates", platesRoutes);

module.exports = routes;