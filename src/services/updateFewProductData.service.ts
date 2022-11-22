import AppDataSource from "../data-source";
import Product from "../entities/products.entity";
import { AppError } from "../errors/AppError";
import { IProductPatchRequest } from "../interfaces/product.interface";
import { validate } from "uuid";


const updateFewProductDataService = async (
  { produto, descricao, valor }: IProductPatchRequest,
  id: string
) => {
  const verifyIfIdIsUUID = validate(id);
  if (!verifyIfIdIsUUID) {
    throw new AppError("Id incorret format provided", 404);
  }

  const productRepository = AppDataSource.getRepository(Product);

  const findProduct = await productRepository.findOneBy({
    id: id,
  });

  if (!findProduct) {
    throw new AppError("PRoduct not found", 404);
  }

  await productRepository.update(id, {
    produto: produto ? produto : findProduct.produto,
    descricao: descricao ? descricao : findProduct.descricao,
    valor: valor ? valor : findProduct.valor,
  });

  const product = await productRepository.findOneBy({
    id: id,
  });

  return product!;
};

export default updateFewProductDataService;
