import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResponse, CreateCartDTO } from './cart';

@Controller()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/cart')
  async cartAmount(
    @Body() createCartDTO: CreateCartDTO,
  ): Promise<CartResponse> {
    return this.cartService.cartAmount(createCartDTO);
  }
}
