import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [PrimaryButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  item = input.required<IProduct>();

  cartService = inject(CartService);

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
