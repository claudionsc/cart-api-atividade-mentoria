import { Injectable } from '@nestjs/common';
import { Product } from './products';

@Injectable()
export class ProductsService {
  private readonly products: Array<Product> = [
    { id: 1, name: 'Camiseta', price: 29.99, quantity: 50 },
    { id: 2, name: 'Calça Jeans', price: 59.99, quantity: 30 },
    { id: 3, name: 'Tênis Esportivo', price: 99.99, quantity: 20 },
  ];

  findAll(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }
}
