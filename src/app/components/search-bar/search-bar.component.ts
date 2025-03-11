import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() search = 'initial';
  @Output() searchChange = new EventEmitter<string>();

  @Output() searchButton = new EventEmitter();

  searchButtonListen(){
    this.searchButton.emit();
  }

  updateChange(value: string){
    this.searchChange.emit(value);
  }
}
