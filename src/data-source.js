"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var product_1 = require("./entity/product");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "pizzau",
    password: "pizza!@isthebest",
    database: "pizzahub",
    synchronize: true,
    logging: true,
    entities: [product_1.Product],
    subscribers: [],
    migrations: [],
});
