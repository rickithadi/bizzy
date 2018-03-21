import { USERS } from './../../user-list/data-model';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-players',
  template: `

<div *ngFor="let user of users; let i = index">
<div *ngIf="i<count">
{{user.id}}
{{user.name}}
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
  users = USERS;
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

  constructor() {}

  ngOnInit() {
    this.addUser();
    console.log('Pasesed', this.count);
    console.log(this.Arr(this.count));
  }

  private addUser(): void {
    for (let i = 1; i < this.count + 1; i++) {
      this.arr1.push(369);
    }
    console.log(this.arr1);
  }

  private refresh() {
    console.log('Pasesed', this.count);
  }
}
