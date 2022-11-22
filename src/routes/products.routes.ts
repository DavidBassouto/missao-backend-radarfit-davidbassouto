import Router from "express";

import createProductController from "../controllers/createProducts.controller";
import { listAllProductsController } from "../controllers/listAllProducts.controller";
import { listProductsByIdController } from "../controllers/listProductById.controller";

export const productRoutes = Router();

productRoutes.post("", createProductController);
productRoutes.get("", listAllProductsController);
productRoutes.get("/:productId", listProductsByIdController);
