import { Router } from "express";
import AppointmentsController from "./appointmentsController.js";
import AppointmentValidation from "../../validation/AppointmentValidation.js";
import { Routes } from "../../constant/Routes.js";

const router = Router();
const appointmentsRoutes = (app) => {
  router
    .route("/:userId")
    .get(AppointmentsController.getAppointments);

  router
    .route("/:appointmentId/details")
    .get(AppointmentsController.getAppointmentDetails);

  router
    .route("/")
    .post(AppointmentValidation.book(), AppointmentsController.bookAppointment);
    
  app.use(Routes.APPOINTMENTS, router);
};

export default appointmentsRoutes;