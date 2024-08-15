import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { CategoryService, ProductService } from '../services';
import { ProductController } from './controller';





export class ProductRoutes {


    static get routes(): Router {

        const router = Router();
        const productService = new ProductService();
        const controller = new ProductController(productService);

       

        router.get('/', controller.getProducts);
        router.post('/', [AuthMiddleware.validateJWT], controller.createProduct);



        return router;
    }


}

