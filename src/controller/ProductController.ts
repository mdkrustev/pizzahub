import {CrudInterface} from "./CrudInterface";
import {Request, Response} from "express";
import {Product} from "../entity/product";
import {AppDataSource} from "../data-source";
import {create} from "domain";

export class ProductController implements CrudInterface {

    async add(req: Request, res: Response) {
        const input: any = req.body
        const product = new Product()
        product.title = input.title
        product.price = input.price
        product.image = input.image
        await AppDataSource.manager.save(product)
        res.status(200).json({success: true, product: product})
    }

    delete(req: Request, res: Response) {

    }

    edit(req: Request, res: Response) {
    }

    async list(req: Request, res: Response) {
        const productRepository = AppDataSource.getRepository(Product)
        const allProducts = await productRepository.find()
        res.status(200).json(allProducts)
    }
}
