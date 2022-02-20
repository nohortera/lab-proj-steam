import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  state?: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeState(newState: string): void {
    this.state = newState
  }
}
