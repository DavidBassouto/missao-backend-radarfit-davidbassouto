import { Request, Response } from "express";
import { listProductByIdService } from "../services/listProductsById.service";

export const listProductsByIdController = async (
  req: Request,
  res: Response
) => {
  const { productId } = req.params;

  const productFind = await listProductByIdService(productId);

  return res.json(productFind);
};
