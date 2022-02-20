import { Component, OnInit } from '@angular/core';
import { GameService } from "../../core/services/game/game.service";
import { Game } from "../../shared/interfaces/game";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  games: Game[] = []
  cardType: 'games' | 'library' = 'library'

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames()
  }

  getGames(): void {
    this.gameService.getFromLibrary()
      .subscribe(games => this.games = games)
  }

}
