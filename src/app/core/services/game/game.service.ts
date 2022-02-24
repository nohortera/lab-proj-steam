import { Injectable } from '@angular/core';
import { Game } from "../../../shared/interfaces/game";
import { Observable, of } from "rxjs";
import { GAMES } from "../../../shared/mocks/mock-games";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  filters = {
    indie: false,
    action: false,
    adventure: false
  }

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
    term = term.trim()
    const genreFilters: string[] = []
    for (let key in this.filters) {
      if (this.filters.hasOwnProperty(key)) {
        // @ts-ignore
        if (this.filters[key]) {
          genreFilters.push(key)
        }
      }
    }
    const result: Game[] = []
    GAMES.forEach(game => {
      if (game.title.toLowerCase().includes(term.toLowerCase()) && this.matchTags(game, genreFilters)) {
        result.push(game)
      }
    })
    return of(result)
  }

  matchTags(game: Game, filters: string[]): boolean {
    if (!filters.length) {
      return true
    }
    let result = false
    // @ts-ignore
    filters.forEach(filter => {
      if (game.tag === filter) {
        result = true
      }
    })
    return result
  }

  updateFilters(event: any): void {
    const key: string = event.target.value
    const value: boolean = event.target.checked
    // @ts-ignore
    this.filters[key] = value
    console.log(key, value, this.filters)
  }


}
