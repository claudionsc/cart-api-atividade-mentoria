import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';

const products = [
  { id: 1, name: 'Camiseta', price: 29.99, quantity: 2 },
  { id: 2, name: 'Calça Jeans', price: 59.99, quantity: 3 },
  { id: 3, name: 'Tênis Esportivo', price: 99.99, quantity: 1 },
];

const expectedResult = {
  totalQuantityItems: 6,
  totalCartPrice: 339.94,
};

describe('CartAMount', () => {
  let cartService: CartService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CartService],
    }).compile();

    cartService = app.get<CartService>(CartService);
  });

  describe('CartAmount', () => {
    it('Should render something', () => {
      const result = cartService.cartAmount(products);

      expect(result).toEqual(expectedResult);
    });
  });
});
