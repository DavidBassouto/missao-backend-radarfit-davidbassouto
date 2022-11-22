import { Request, Response } from "express";
import { deleteProductByIdService } from "../services/deleteProductsById.service";

export const deleteProductsByIdController = async (
  req: Request,
  res: Response
) => {
  const { productId } = req.params;
  console.log(req.params)

  const productDeleted = await deleteProductByIdService(productId);

  return res.json({ message: "Product deleted" });
};
