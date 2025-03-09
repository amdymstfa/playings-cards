import { Component } from '@angular/core';
import {PlayingsCardsComponent} from './components/playings-cards/playings-cards.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    PlayingsCardsComponent
  ]
})
export class AppComponent {
}
