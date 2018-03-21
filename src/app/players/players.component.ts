import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players',
  template: `

  <div  *ngFor="let i of Arr(count).fill(1)">

  name
    <input matInput type="text" [(ngModel)]="user.name" />

    shots
    <input matInput type="number" [(ngModel)]="user.shots" />

   volume
     <input matInput type="number" [(ngModel)]="user.volume"/>
    modifier
          <mat-slider min="1" max="5" step="0.5"[(ngModel)]="user.modifier" value='1'></mat-slider>{{user.modifier}}
      <button mat-button class="btn btn-primary" (click)="addUser()">Submit</button>
  <br>


  </div>
  `,
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() count;

  Arr = Array;
  num: number;
  userList = [];
  user = {
    id: 1,
    shots: 0,
    volume: 0,
    modifier: 1,
    name: ''
  };

  constructor() {}

  ngOnInit() {
    console.log('Pasesed', this.count);
  }

  private addUser(): void {}

  private refresh() {
    console.log('Pasesed', this.count);
  }
}
