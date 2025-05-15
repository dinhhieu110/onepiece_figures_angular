import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../custom/primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  greeting() {
    console.log('Hello Wilson!!!');
  }
}
