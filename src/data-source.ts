import { DataSource } from 'typeorm';
import { Product } from './entities/Product';
import { Category } from './entities/Category';
import path from 'path';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'MyStore', // Replace with your database name
  entities: [Product, Category],
  migrations: [path.join(__dirname, './migrations/*.ts')], // Adjust if needed
  synchronize: false,
  logging: true,
});

export default AppDataSource; // Ensure ONLY this is exported
