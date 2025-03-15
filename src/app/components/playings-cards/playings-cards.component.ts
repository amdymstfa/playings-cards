import { Shadow } from './../../models/shadow.model';
import { Component,input,Input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-playings-cards',
  standalone: true,
  imports: [],
  templateUrl: './playings-cards.component.html',
  styleUrl: './playings-cards.component.css'
})
export class PlayingsCardsComponent {
  // consume object
  // @Input() shadow: Shadow = new Shadow();
  // shadow: InputSignal<Shadow> = input(new Shadow());
  @Input() shadow: Shadow = new Shadow();
}
