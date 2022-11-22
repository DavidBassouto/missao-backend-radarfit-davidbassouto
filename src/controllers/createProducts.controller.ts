import { Request, Response } from "express";
import { IProductRequest } from "../interfaces/product.interface";
import { createProductService } from "../services/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  const { produto, descricao, valor }: IProductRequest = req.body;

  const product = await createProductService({
    produto,
    descricao,
    valor
  });

  return res.status(201).json(product);
};

export default createProductController;
