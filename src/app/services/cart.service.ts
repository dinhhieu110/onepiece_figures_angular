import { Injectable, signal } from '@angular/core';
import { IProduct } from '../../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<IProduct[]>([]);

  addToCart(product: IProduct) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() {}
}
