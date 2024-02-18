const { Router } = require("express");

const PlatesController = require("../controllers/PlatesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureAdminAuthenticated = require("../middlewares/ensureAdminAuthenticated");

const platesRoutes = Router();

const platesController = new PlatesController();

platesRoutes.use(ensureAuthenticated)

platesRoutes.post("/", ensureAdminAuthenticated, platesController.create);
platesRoutes.get("/:id", platesController.show);
platesRoutes.delete("/:id", ensureAdminAuthenticated, platesController.delete);
platesRoutes.get("/", platesController.index);
platesRoutes.put("/:id", ensureAdminAuthenticated, platesController.update);

module.exports = platesRoutes;