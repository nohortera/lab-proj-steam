import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() name!: string
  @Output() buttonEvent = new EventEmitter()

  constructor() { }

  onClick() {
    this.buttonEvent.emit()
  }

}
