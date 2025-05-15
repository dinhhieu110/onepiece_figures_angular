import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../../../models/products.model';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<IProduct>();
  cartService = inject(CartService);

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
