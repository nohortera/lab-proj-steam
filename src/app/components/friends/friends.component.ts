import { Component, OnInit } from '@angular/core';
import { FriendsService } from "../../core/services/friends/friends.service";
import { IUser } from "../../shared/interfaces/IUser";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  searchFormPlaceholder: string = 'Search Friends'
  friends: IUser[] = []

  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
    this.getFriends()
  }

  searchFriends(term: string): void {
    this.friendsService.searchFriend(term, this.friends)
      .subscribe(friends => this.friends = friends)
  }

  getFriends(): void {
    this.friendsService.getFriends()
      .subscribe(friends => this.friends = friends)
  }

  addFriend(id: number): void {
    this.friendsService.addFriend(id)
    this.friends.find(friend => friend.id === id)
  }

  removeFriend(id: number): void {

  }
}
