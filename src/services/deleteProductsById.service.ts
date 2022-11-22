import AppDataSource from "../data-source";
import Product from "../entities/products.entity";
import { AppError } from "../errors/AppError";
import { validate } from "uuid";

export const deleteProductByIdService = async (
  id: string
): Promise<boolean> => {
  const productRepository = AppDataSource.getRepository(Product);

  const verifyIfIdIsUUID = validate(id);
  if (!verifyIfIdIsUUID) {
    throw new AppError("Id incorret format provided", 404);
  }

  const findProduct = await productRepository.findOneBy({ id: id });
  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }

  const productDeleted = await productRepository
    .createQueryBuilder()
    .delete()
    .from(Product)
    .where("id = :id", { id: id })
    .execute();

  return true;
};
