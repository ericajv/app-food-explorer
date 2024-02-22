const { Router, request } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const PlatesController = require("../controllers/PlatesController");
const PlateImageController = require("../controllers/PlateImageController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureAdminAuthenticated = require("../middlewares/ensureAdminAuthenticated");

const platesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const platesController = new PlatesController();
const plateImageController = new PlateImageController();

platesRoutes.use(ensureAuthenticated)

platesRoutes.post("/", ensureAdminAuthenticated, platesController.create);
platesRoutes.get("/:id", platesController.show);
platesRoutes.delete("/:id", ensureAdminAuthenticated, platesController.delete);
platesRoutes.get("/", platesController.index);
platesRoutes.put("/:id", ensureAdminAuthenticated, platesController.update);
platesRoutes.patch("/:id/image", ensureAdminAuthenticated, upload.single("image"), plateImageController.update)

module.exports = platesRoutes;