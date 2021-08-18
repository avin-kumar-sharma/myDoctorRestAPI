import { Router } from "express";
import { Routes } from "../../constant/Routes.js";
import MetadataController from "./metadataController.js";

const router = Router();
const specializationsRoutes = (app) => {
    router
    .route("/specializations")
    .get(MetadataController.getSpecializations);

  app.use(Routes.METADATA, router);
};

export default specializationsRoutes;
