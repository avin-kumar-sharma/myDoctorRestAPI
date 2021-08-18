import { Router } from "express";
import AuthController from "./authController.js";
import AuthValidation from "../../validation/AuthValidation.js";
import { Routes } from "../../constant/Routes.js";

const router = Router();
const authRoutes = (app) => {
    router
    .route("/login")
    .post(AuthValidation.login() ,AuthController.login);

  router
    .route("/signup")
    .post(AuthValidation.signup() ,AuthController.signup);

  router
    .route("/checkuser")
    .post(AuthValidation.checkUser(), AuthController.checkUser);


  app.use(Routes.AUTH, router);
};

export default authRoutes;
