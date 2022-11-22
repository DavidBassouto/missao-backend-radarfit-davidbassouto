import Router from "express";
import createProductController from "../controllers/createProducts.controller";
import { listAllProductsController } from "../controllers/listAllProducts.controller";

export const productRoutes = Router();

productRoutes.post("", createProductController);
productRoutes.get("", listAllProductsController);
