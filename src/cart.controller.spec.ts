import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

const products = [
  { id: 1, name: 'Camiseta', price: 29.99, quantity: 2 },
  { id: 2, name: 'Calça Jeans', price: 59.99, quantity: 30 },
  { id: 3, name: 'Tênis Esportivo', price: 99.99, quantity: 20 },
];

const response = {
  totalQuantityItems: 0,
  totalCartPrice: 0,
};

describe('CartController', () => {
  let cartController: CartController;
  let cartService: CartService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService],
    }).compile();

    cartController = app.get<CartController>(CartController);
    cartService = app.get<CartService>(CartService);
  });

  describe('cartProducts', () => {
    it('Should render a cart amount', async () => {
      jest.spyOn(cartService, 'cartAmount').mockReturnValue(response);
      await cartController.cartAmount(products);
      expect(cartService.cartAmount).toHaveBeenLastCalledWith(products);
    });
  });
});
