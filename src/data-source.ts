import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Product } from './entities/product';
import { Category } from './entities/category';


const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mystore',
  entities: [Product, Category],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
  logging: true,
});

export default AppDataSource;
