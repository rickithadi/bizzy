import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',

  template: `<div class="todo-input-wrapper">

name
  <input matInput type="text" [(ngModel)]="name" value={{name}}>

  shots
  <input matInput type="number" [(ngModel)]="shots" value={{shots}}/>

 volume
   <input matInput type="number" [(ngModel)]="volume" value={{volume}}>

  modifier
        <mat-slider min="1" max="5" step="0.5"[(ngModel)]="modifier" value='1'></mat-slider>{{modifier}}
    <button mat-button class="btn btn-primary" (click)="addUser()">Submit</button>
<br>


</div>
`,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public name: string;
  public shots: number;
  public volume: number;
  public modifier: number;

  constructor(private userService: UserService) {
    this.name = '';
  }

  ngOnInit() {}
  private addUser(): void {
    this.userService.adduser(this.name, this.shots, this.volume, this.modifier);
    this.name = '';
  }
}
