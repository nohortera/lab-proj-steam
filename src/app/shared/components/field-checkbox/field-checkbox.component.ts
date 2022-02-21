import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.css']
})
export class FieldCheckboxComponent {

  @Input() name!: string
  @Input() value!: string

}
