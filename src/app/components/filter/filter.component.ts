import { Component } from '@angular/core';
import {GameService} from "../../core/services/game/game.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  filters: string[] = ['Indie', 'Action', 'Adventure']
  checkboxGroupName: string = 'tag'

  constructor(private gameService: GameService) { }

  updateFilters(event: any): void {
    this.gameService.updateFilters(event)
  }

}
