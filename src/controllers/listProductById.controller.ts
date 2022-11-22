import { Request, Response } from "express";
import Product from "../entities/products.entity";
import { listProductByIdService } from "../services/listProductsById.service";

export const listProductsByIdController= async(req:Request, res: Response)=>{
    const {id}= req.params

    const productFind= await listProductByIdService(id)

    return res.json(productFind)

}