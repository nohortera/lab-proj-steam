import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  id: string = 'search'
  @ Input() text!: string

  @Output() searchEvent = new EventEmitter<string>()

  constructor() { }

  search(term: string): void {
    this.searchEvent.emit(term)
  }

}
