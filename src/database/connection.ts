import { DataSource } from 'typeorm';
import { Product } from '../entities/Product';
import { Category } from '../entities/Category';
import path from 'path';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'MyStore',
  entities: [Product, Category],
  migrations: [path.join(__dirname, '../migrations/*.ts')],
  synchronize: false,
  logging: true,
});

export default AppDataSource; // Ensure it’s exported as the default export
