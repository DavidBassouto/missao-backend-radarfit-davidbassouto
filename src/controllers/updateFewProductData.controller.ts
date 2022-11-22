import { Request, Response } from "express";
import { IProductPatchRequest } from "../interfaces/product.interface";
import updateFewProductDataService from "../services/updateFewProductData.service";

export const updateFewProductDataController = async (
  req: Request,
  res: Response
) => {
  const { productId } = req.params;

  const newData: IProductPatchRequest = req.body;
  const editedProduct = await updateFewProductDataService(newData, productId);
  return res.status(200).json({
    message: "Product Updated",
    user: editedProduct,
  });
};
