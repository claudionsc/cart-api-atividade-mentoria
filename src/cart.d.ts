import { Product } from './products';

export type CartResponse = {
  totalQuantityItems: number;
  totalCartPrice: number;
};

export type CreateCartDTO = Product[];
