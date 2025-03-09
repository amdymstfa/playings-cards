import { Component } from '@angular/core';

@Component({
  selector: 'app-playings-cards',
  standalone: true,
  imports: [],
  templateUrl: './playings-cards.component.html',
  styleUrl: './playings-cards.component.css'
})
export class PlayingsCardsComponent {
  name: string = 'Igris Sl';
  hp: number = 50 ;
  rank: string = 'Boss';
  power: number = 90 ;
  description: string = 'white eyes and a shiny armored red body';
}
