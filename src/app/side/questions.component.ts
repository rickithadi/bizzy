import { Component, OnInit, Input } from '@angular/core';
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
  @Input() count;
  localGlobals = JSON.parse(localStorage.getItem('globe'));

  constructor(private playerService: PlayerService) {
    this.localGlobals = JSON.parse(localStorage.getItem('globe'));
    localStorage.setItem('players', JSON.stringify(this.players));
    console.log(this.localGlobals.Gpax);
  }

  ngOnInit() {
    this.getPlayers();

    localStorage.setItem('players', JSON.stringify(this.players));
    console.log('Set', this.players);
  }
  getPlayers() {
    this.players = this.playerService.getPlayersFromData();
  }

  refresh() {
    this.localGlobals = JSON.parse(localStorage.getItem('globe'));
    console.log("gpax", this.localGlobals.Gpax);
  }
}
