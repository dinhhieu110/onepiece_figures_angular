import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-sumary',
  imports: [],
  templateUrl: './order-sumary.component.html',
  styleUrl: './order-sumary.component.css',
})
export class OrderSumaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    this.cartService.cart().forEach((element) => {
      total += element.price;
    });
    return total;
  });
}
