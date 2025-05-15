import { Component, signal } from '@angular/core';
import { IProduct } from '../../../models/products.model';
import { ProductCardComponent } from '../../components/custom/product-card/product-card.component';
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = signal<IProduct[]>([
    {
      id: 1,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image: 'https://m.media-amazon.com/images/I/710gZ7NCbVL._AC_SX679_.jpg',
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image:
        'https://m.media-amazon.com/images/I/71ocz02rYSL._AC_UL640_FMwebp_QL65_.jpg',
      price: 200,
      stock: 5,
    },
    {
      id: 3,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image:
        'https://m.media-amazon.com/images/I/61VvY95YoiL._AC_UL640_FMwebp_QL65_.jpg',
      price: 300,
    },
    {
      id: 4,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image:
        'https://m.media-amazon.com/images/I/718xU8YbfUL._AC_UL640_FMwebp_QL65_.jpg',
      price: 400,
    },
    {
      id: 5,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image:
        'https://m.media-amazon.com/images/I/71Uq+peKhaL._AC_UL640_FMwebp_QL65_.jpg',
      price: 200,
    },
    {
      id: 6,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image:
        'https://m.media-amazon.com/images/I/71QVgL8cwbL._AC_UL640_FMwebp_QL65_.jpg',
      price: 300,
    },
    {
      id: 7,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image:
        'https://m.media-amazon.com/images/I/71DUkhf8pQL._AC_UL640_FMwebp_QL65_.jpg',
      price: 300,
    },
    {
      id: 8,
      name: 'TAMASHII NATIONS - One Piece - Monkey D. Luffy -Romance Dawn-, Bandai Spirits S.H.Figuarts Action Figure',
      image:
        'https://m.media-amazon.com/images/I/51ThM3UYiYL._AC_UL640_FMwebp_QL65_.jpg',
      price: 500,
    },
  ]);
}
