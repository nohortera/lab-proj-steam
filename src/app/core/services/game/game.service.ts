import { Injectable } from '@angular/core';
import { Game } from "../../../shared/interfaces/game";
import { Observable, of } from "rxjs";
import { GAMES } from "../../../shared/mocks/mock-games";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private localStorageService: LocalStorageService) { }

  getGames(): Observable<Game[]> {
    const games = of(GAMES)
    return games
  }

  addToLibrary(game: Game): void {
    this.localStorageService.addGame(game)
  }

  getFromLibrary() {
    return of(this.localStorageService.getGame())
  }

  searchGames(term: string): Observable<Game[]> {
    const result: Game[] = []
    GAMES.forEach(game => {
      if (game.title.toLowerCase().includes(term.toLowerCase())) result.push(game)
    })
    return of(result)
  }
}
