import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

const products = [
  { id: 1, name: 'Camiseta', price: 29.99, quantity: 50 },
  { id: 2, name: 'Calça Jeans', price: 59.99, quantity: 30 },
  { id: 3, name: 'Tênis Esportivo', price: 99.99, quantity: 20 },
];

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsController = app.get<ProductsController>(ProductsController);
    productsService = app.get<ProductsService>(ProductsService);
  });

  describe('products', () => {
    it('Should render a products list', async () => {
      jest.spyOn(productsService, 'findAll').mockResolvedValue(products); // DESAFIO: Criar o método findAll para retornar a lista mockada
      // No service e na controller
      await productsController.findAll();

      expect(productsService.findAll).toHaveBeenCalledWith();
    });
  });
});
