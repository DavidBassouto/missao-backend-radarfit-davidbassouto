import AppDataSource from "../data-source";
import Product from "../entities/products.entity";

import { IProductRequest } from "../interfaces/product.interface";

export const createProductService = async ({
  produto,
  descricao,
  valor,
}: IProductRequest): Promise<Product> => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = productRepository.create({
    produto,
    descricao,
    valor,
  });

  await productRepository.save(product);
  return product;
};
