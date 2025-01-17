"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Product_1 = require("../entities/Product");
const Category_1 = require("../entities/Category");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql', // Use MySQL
    host: 'localhost', // Your MySQL host
    port: 3306, // Default MySQL port
    username: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'MyStore', // Replace with your database name
    entities: [Product_1.Product, Category_1.Category],
    synchronize: false, // Set to true only for development
    logging: true,
    migrations: ['src/migrations/*.ts'], // Path to migrations
});
exports.default = AppDataSource;
