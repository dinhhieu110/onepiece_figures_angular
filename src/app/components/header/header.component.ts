import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../custom/primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cart = inject(CartService).cart;
}
