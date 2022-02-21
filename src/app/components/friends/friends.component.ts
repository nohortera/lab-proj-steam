import { Component } from '@angular/core';
import {FriendsService} from "../../core/services/friends/friends.service";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  searchFormPlaceholder: string = 'Search Friends'
  friends = null

  constructor(private friendsService: FriendsService) { }

  searchFriends(term: string): void {

  }

}
