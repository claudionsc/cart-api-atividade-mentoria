import { Injectable } from '@nestjs/common';
import { Product } from './products';
import { CartResponse, CreateCartDTO } from './cart';

@Injectable()
export class CartService {
  private cartResponse: CartResponse = {
    totalQuantityItems: 0,
    totalCartPrice: 0,
  };
  private calcAmount(
    cartResponse: CartResponse,
    cartProducts: Product[],
  ): CartResponse {
    const quantity = cartProducts.reduce((acc, p) => acc + p.quantity, 0);

    const amount = cartProducts
      .map((p) => p.quantity * p.price)
      .reduce((acc, curr) => acc + curr, 0);

    cartResponse.totalCartPrice = amount;
    cartResponse.totalQuantityItems = quantity;

    return cartResponse;
  }
  cartAmount(createCartDTO: CreateCartDTO): CartResponse {
    return createCartDTO.length > 0
      ? this.calcAmount(this.cartResponse, createCartDTO)
      : this.cartResponse;
  }
}
