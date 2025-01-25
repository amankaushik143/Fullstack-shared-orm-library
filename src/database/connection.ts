import { DataSource } from 'typeorm';
import { Product } from '../entities/product';
import { Category } from '../entities/category';
import path from 'path';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'mystore',
  entities: [Product, Category],
  migrations: [path.join(__dirname, '../migrations/*.ts')],
  synchronize: false,
  logging: true,
});

export default AppDataSource; // Ensure it’s exported as the default export
