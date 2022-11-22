import Router from "express";

import createProductController from "../controllers/createProducts.controller";
import { deleteProductsByIdController } from "../controllers/deleteProductsById.controller";
import { listAllProductsController } from "../controllers/listAllProducts.controller";
import { listProductsByIdController } from "../controllers/listProductById.controller";
import { updateFewProductDataController } from "../controllers/updateFewProductData.controller";

export const productRoutes = Router();

productRoutes.post("", createProductController);
productRoutes.get("", listAllProductsController);
productRoutes.get("/:productId", listProductsByIdController);
productRoutes.delete("/:productId", deleteProductsByIdController);
productRoutes.patch("/:productId", updateFewProductDataController);
