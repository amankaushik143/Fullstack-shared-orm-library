import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id!: number; // Add definite assignment assertion

  @Column()
  productName!: string;

  @Column()
  description!: string;

  @Column('decimal')
  price!: number;

  @Column()
  stockQuantity!: number;

  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
