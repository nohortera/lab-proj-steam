import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  username: string = 'Username'
  email: string = 'Email'
  age: string = 'Age'
  button: string = 'Save'


  constructor() { }

  ngOnInit(): void {
  }

}
