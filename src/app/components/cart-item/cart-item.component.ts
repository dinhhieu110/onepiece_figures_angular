import { Component, input } from '@angular/core';
import { IProduct } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-cart-item',
  imports: [PrimaryButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  item = input.required<IProduct>();
}
