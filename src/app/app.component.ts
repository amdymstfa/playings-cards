import { Shadow } from './models/shadow.model';
import { Component } from '@angular/core';
import {PlayingsCardsComponent} from './components/playings-cards/playings-cards.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    PlayingsCardsComponent,
    SearchBarComponent
  ]
})
export class AppComponent {
  shadow1!: Shadow;
  count: number = 0;
  search = '';

  constructor(){
    this.shadow1 = new Shadow();
    this.shadow1.name = 'Iron';
    this.shadow1.description = 'Was a hunter';
    this.shadow1.hp = 50;
    this.shadow1.power = 75;
    this.shadow1.rank = 'A';
    this.shadow1.image = '/assets/img/Iron.webp';
  }

  onClick(){
    this.count++;
  }
}
