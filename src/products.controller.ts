import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/products') // Define a rota para o método findAll
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
