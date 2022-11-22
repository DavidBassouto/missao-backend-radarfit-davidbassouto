import { Request, Response } from "express";
import { IProductPutRequest } from "../interfaces/product.interface";
import updateaAllProductDataService from "../services/updateAllProductData.service";

export const updateAllProductDataController = async (
  req: Request,
  res: Response
) => {
  const { productId } = req.params;

  const {valor,produto,descricao}: IProductPutRequest = req.body;
  const editedProduct = await updateaAllProductDataService({valor,produto,descricao}, productId);
  return res.status(200).json({
    message: "Product Updated",
    product: editedProduct,
  });
};
