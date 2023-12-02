import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';


@Module({
  imports: [],
  controllers: [ProductsController, CartController],
  providers: [ProductsService, CartService],
})
export class ProductsModule {}
