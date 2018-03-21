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

</div>
            </div>
  name
    <input matInput type="text"   />


    modifier
          <mat-slider min="1" max="5" step="0.5"[(ngModel)]="user.modifier" value='1'></mat-slider>{{user.modifier}}
      <button mat-button class="btn btn-primary" (click)="addUser()">Submit</button>
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

  playerForm = false;
  editPlayerForm = false;
  isNewForm: boolean;
  newPlayer: any = {};
  editedPlayer: any = {};

  user = {
    id: 1,
    shots: 0,
    volume: 0,
    modifier: 1,
    name: ''
  };

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
    console.log(this.players);
  }

  getPlayers() {
    this.players = this.playerService.getPlayersFromData();
  }

  showEditPlayerForm(player: Player) {
    if (!player) {
      this.playerForm = false;
      return;
    }
    this.editPlayerForm = true;
    this.editedPlayer = clone(player);
  }

  showAddPlayerForm() {
    // resets form if edited player
    if (this.players.length) {
      this.newPlayer = {};
    }
    this.playerForm = true;
    this.isNewForm = true;
  }

  savePlayer(player: Player) {
    if (this.isNewForm) {
      // add a new player
      this.playerService.addPlayer(player);
    }
    this.playerForm = false;
  }

  removePlayer(player: Player) {
    this.playerService.deletePlayer(player);
  }

  updatePlayer() {
    this.playerService.updatePlayer(this.editedPlayer);
    this.editPlayerForm = false;
    this.editedPlayer = {};
  }

  cancelNewPlayer() {
    this.newPlayer = {};
    this.playerForm = false;
  }

  cancelEdits() {
    this.editedPlayer = {};
    this.editPlayerForm = false;
  }
}
