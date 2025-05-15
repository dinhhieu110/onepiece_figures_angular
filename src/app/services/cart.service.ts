import { Injectable, signal } from '@angular/core';
import { IProduct } from '../../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<IProduct[]>([]);
  products = signal<IProduct[]>([]);

  addToCart(product: IProduct) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter((i) => i.id !== productId));
  }

  async getAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.products.set(data);
  }

  constructor() {}
}
