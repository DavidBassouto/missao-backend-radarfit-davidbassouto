import AppDataSource from "../data-source";
import Product from "../entities/products.entity";
import { AppError } from "../errors/AppError";

export const listProductByIdService = async (id: string): Promise<Product> => {
  const productRepository = AppDataSource.getRepository(Product);

  const productFinded = await productRepository.findOneBy({
    id: id,
  });
  if (!productFinded) {
    throw new AppError("Product not found", 404);
  }
  return productFinded;
};
