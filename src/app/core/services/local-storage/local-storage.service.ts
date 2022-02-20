import { Injectable } from '@angular/core';
import { Game } from "../../../shared/interfaces/game";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  lib: string = 'library'

  addGame(game: Game): void {
    const id = game.id
    if (!window.localStorage.getItem(this.lib)) {
      const data = {games: [game]}
      window.localStorage.setItem(this.lib, JSON.stringify(data))
    } else {
      if (typeof window.localStorage.getItem(this.lib) === 'string') {
        const data = JSON.parse(window.localStorage.getItem(this.lib)!.toString())
        if (data.games.find((g: Game) => g.id === id)) {
          alert('This game is already in your library')
          return
        }
          data.games.push(game)
        window.localStorage.setItem(this.lib, JSON.stringify(data))
      }
    }
  }

  getGame(): Game[] {
    return JSON.parse(window.localStorage.getItem(this.lib)!.toString()).games
  }
}
