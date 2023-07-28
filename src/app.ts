import * as express from 'express'
import * as cors from 'cors'
import {AppDataSource} from "./data-source";
import {Product} from "./entity/product";
import {Routes} from "./routes";


AppDataSource.initialize().then(() => {
    const app = express();
    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:8080']
    }))

    app.use(express.json())
    new Routes().setApp(app)

    console.log('Listening to port: http://localhost:8080')
    app.listen(8080)
})
    .catch((error) => console.log(error))





