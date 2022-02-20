import {Component, Input, OnInit} from '@angular/core';

import { Game } from "../../interfaces/game";
import { GameService } from "../../../core/services/game/game.service";
// import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  // buttonType: string = ''

  @Input() game!: Game
  @Input() cardType!: 'games' | 'library'

  // constructor(private route:ActivatedRoute) { }
  constructor (private gameService: GameService) { }

  ngOnInit(): void {
    // this.setButtonType()
  }

  // setButtonType(): void {
  //   // if (this.route.snapshot.paramMap.has('games')) {
  //   //   this.buttonType = 'games'
  //   // }
  //   console.log(this.route.snapshot.paramMap.has('games'))
  // }

  addToLibrary(game: Game): void {
    this.gameService.addToLibrary(game)
  }

}
