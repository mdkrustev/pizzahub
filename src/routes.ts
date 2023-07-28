import {ProductController} from "./controller/ProductController";

export class Routes {
   setApp(app:any) {

       app.get('/', (req, res) => {
           const name = "John"
           res.status(200).json({message: `Hello, ${name}! Thanks for sending your data.`});
       })

       app.get('/api/products', new ProductController().list)
       app.post('/api/products/add', new ProductController().add)
   }
}
