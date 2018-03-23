import { Player } from './player';
import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './player.service';
import { clone } from 'lodash';
@Component({
  selector: 'app-players',
  template: `

<div *ngFor="let player of players; let i = index">
<div *ngIf="i<count">
{{player.id}}
{{player.name}}


    <input matInput type="text" value={{player.name}}   (change)="updatePlayer()"[(ngModel)]="player.name" value='1'>

    modifier
          <mat-slider min="1" max="5" step="0.5"[(ngModel)]="player.modifier" (change)="updatePlayer()" value='1'></mat-slider>{{player.modifier}}

   </div>
            </div>


  <br>




  `,
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  @Input() count;
  someArray: [9, 2, 5];
  Arr = Array;
  num: number;
  arr1: number[] = [];

  user = {
    id: 1,
    shots: 0,
    volume: 0,
    modifier: 1,
    name: ''
  };

  constructor(private playerService: PlayerService) {
    this.getPlayers();
    localStorage.setItem('players', JSON.stringify(this.players));
    console.log('Set', this.players);
  }

  ngOnInit() {
    this.getPlayers();
    console.log(this.players);
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  getPlayers() {
    this.players = this.playerService.getPlayersFromData();
  }

  removePlayer(player: Player) {
    this.playerService.deletePlayer(player);
  }

  updatePlayer(player: Player) {
    this.playerService.updatePlayer(player);
  }
}
