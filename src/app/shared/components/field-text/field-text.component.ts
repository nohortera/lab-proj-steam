import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.css']
})
export class FieldTextComponent implements OnInit {

  placeholder?: string

  constructor() { }

  ngOnInit(): void {
  }

}
