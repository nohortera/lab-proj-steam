import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { IUser } from "../../../shared/interfaces/IUser";
import { USERS } from "../../../shared/mocks/mock-users"
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private localStorageService: LocalStorageService) { }

  getFriends(): Observable<IUser[]> {
    const friends: IUser[] = []
    const friendsID = this.getFriendsID()
    USERS.map((user: IUser) => {
      if (friendsID.find(id => user.id === id)) {
        user.isFriend = true
        // friends.push(user)
      } else {
        user.isFriend = false
      }
      friends.push(user)
    })
    console.log(friends)
    return of(friends)
  }

  addFriend(id: number): void {
    this.localStorageService.addFriend(id)
  }

  getFriendsID(): number[] {
    return this.localStorageService.getFriendsID()
  }

 searchFriend(term: string, friends: IUser[]): Observable<IUser[]> {
    term = term.trim()
    const result: IUser[] = []
    friends.forEach(user => {
      if (user.username.toLowerCase().includes(term.toLowerCase())) result.push(user)
    })
    return of(result)
  }
}
