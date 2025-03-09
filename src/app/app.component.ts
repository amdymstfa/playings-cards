import { Shadow } from './models/shadow.model';
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
  shadow1!: Shadow;

  constructor(){
    this.shadow1 = new Shadow();
    this.shadow1.name = 'Iron';
    this.shadow1.description = 'Was a hunter';
    this.shadow1.hp = 50;
    this.shadow1.power = 75;
    this.shadow1.rank = 'A';
    this.shadow1.img = '/assets/img/Iron.webp';
  }
}
