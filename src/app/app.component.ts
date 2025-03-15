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
  shadows!: Shadow[];
  count: number = 0;
  search = '';
  selectedShadowIndex = 0;

  constructor(){
    this.shadows = [];

    // shadown 1 
    const shadow1 = new Shadow();
    shadow1.name = 'Iron';
    shadow1.description = 'Was a hunter';
    shadow1.hp = 50;
    shadow1.power = 75;
    shadow1.rank = 'A';
    shadow1.image = '/assets/img/Iron.webp';
    shadow1.color = '#850606';
    this.shadows.push(shadow1);


    // shadown 2 
    const shadow2 = new Shadow();
    shadow2.name = 'Igris';
    shadow2.description = 'Was waiting for the comback of his kinkg';
    shadow2.hp = 70;
    shadow2.power = 85;
    shadow2.rank = 'A';
    shadow2.image = '/assets/img/Igris.webp';
    this.shadows.push(shadow2);
  }

  onClick(){
    this.count++;
  }

  toggleShadow(){
    this.selectedShadowIndex = (this.selectedShadowIndex+1)%(this.shadows.length)
  }
}
