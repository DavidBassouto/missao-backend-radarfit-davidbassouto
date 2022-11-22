import AppDataSource from "../data-source";
import Product from "../entities/products.entity";
import { AppError } from "../errors/AppError";
import { IProductPutRequest } from "../interfaces/product.interface";
import { validate } from "uuid";

const updateaAllProductDataService = async (
  { produto, descricao, valor }: IProductPutRequest,
  id: string
) => {
  const verifyIfIdIsUUID = validate(id);
  if (!verifyIfIdIsUUID) {
    throw new AppError("Id incorret format provided");
  }
  if (!descricao || !produto || !valor) {
    throw new AppError("Required field not provided");
  }
  const productRepository = AppDataSource.getRepository(Product);

  const findProduct = await productRepository.findOneBy({
    id: id,
  });

  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }

  await productRepository.update(id, {
    produto,
    descricao,
    valor,
  });

  const product = await productRepository.findOneBy({
    id: id,
  });

  return product!;
};

export default updateaAllProductDataService;
