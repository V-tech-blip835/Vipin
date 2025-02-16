import express from "express";

import healthController from "../controller/healthcontroller.js";
const router=express.Router();
router.post("/activity",healthController.createActivity);
router.get("/activity/:id",healthController.getActivity);
router.put("/activity/:id",healthController.upadateActivity);
router.delete("/activity/:id",healthController.deleteActivity);
export default router;