import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-text-labeled',
  templateUrl: './field-text-labeled.component.html',
  styleUrls: ['./field-text-labeled.component.css']
})
export class FieldTextLabeledComponent implements OnInit {

  @Input() field!: string
  // id: string = input

  constructor() { }

  ngOnInit(): void {
  }

}
