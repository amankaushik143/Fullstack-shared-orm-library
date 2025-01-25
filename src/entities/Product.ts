import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  stockQuantity: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  constructor() {
    this.id = 0;
    this.productName = '';
    this.description = '';
    this.price = 0;
    this.stockQuantity = 0;
    this.categoryId = 0;
    this.category = new Category();
  }
}
