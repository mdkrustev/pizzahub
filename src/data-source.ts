import {DataSource} from "typeorm";
import {Product} from "./entity/product";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "pizzau",
    password: "pizza!@isthebest",
    database: "pizzahub",
    synchronize: true,
    logging: true,
    entities: [Product],
    subscribers: [],
    migrations: [],
})
