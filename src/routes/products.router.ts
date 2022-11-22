import Router from "express";
import createProductController from "../controllers/createProducts.controller";

export const productRoutes = Router();

productRoutes.post("",createProductController);
