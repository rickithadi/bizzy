import { Component, OnInit } from '@angular/core';
import { PLAYER_ITEMS } from '../players/player_data';
import { Player } from '../players/player';
import { PlayerService } from '../players/player.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  players: Player[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
    localStorage.setItem('players', JSON.stringify(this.players));
    console.log('Set', this.players);
  }
  getPlayers() {
    this.players = this.playerService.getPlayersFromData();
  }

}
