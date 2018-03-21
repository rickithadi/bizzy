import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  template: `
  <button mat-button class="btn btn-primary" (click)="refresh()">refresh</button>
  <div  *ngFor="let i of Arr(num).fill(1)">

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
  localGlobals = JSON.parse(localStorage.getItem('globe'));
  Arr = Array; //Array type captured in a variable
  num: number;
  userList = [];
  user = {
    id: 1,
    shots: 0,
    volume: 0,
    modifier: 1,
    name: ''
  };
  //arr = new Array<object>(this.localGlobals.Gpax);
  constructor() {}

  ngOnInit() {
    this.localGlobals = JSON.parse(localStorage.getItem('globe'));
    this.num = this.localGlobals.Gpax;
    console.log(this.localGlobals.Gpax);
  }

  private addUser(): void {
    //var key = '' + this.user.id;
    // this.arr.push(this.user);
    // localStorage.setItem('user', JSON.stringify(this.user));
    // this.user.id = this.user.id + 1;
  }

  private refresh() {
    this.localGlobals = JSON.parse(localStorage.getItem('globe'));
    this.num = this.localGlobals.Gpax;
    console.log(this.localGlobals.Gpax);
  }
}
