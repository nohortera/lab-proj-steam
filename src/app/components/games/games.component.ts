import { Component, OnInit } from '@angular/core';

import { Game } from "../../shared/interfaces/game";
import { GameService } from "../../core/services/game/game.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = []

  cardType: 'games' | 'library' = 'games'

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames()
  }

  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games)
  }

  // getGamesdByTitle(query: string): Game[] {
  //   this.gameService.getGamesdByTitle(query)
  // }

}
