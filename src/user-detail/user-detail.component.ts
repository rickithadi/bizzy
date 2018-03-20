import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-list/data-model';
import { UserService } from '../user-list/user.service';
@Component({
  selector: 'app-user-detail',
  template: `<div class="userWrapper">
  <br>
  <br>
  <button mat-raised-button color="primary"(click)="removeUser()">remove</button>
  <button mat-raised-button color="primary"(click)="viewUser()">view</button>
name
  <input matInput  type="text"value={{user.name}}>

shots
  <input matInput  type="number" value={{user.shots}}>
volume
  <input matInput type="number" value={{user.volume}}>
  modifier

  <mat-slider min="1" max="5" step="0.5"value={{user.modifier}}></mat-slider>{{user.modifier}}

</div>
`,
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() private user: User;
  private users = JSON.parse(localStorage.getItem('users'));
  constructor(private userService: UserService) {}

  ngOnInit() {}
  private removeUser(): void {
    this.userService.removeuser(this.user.id);
  }
  private viewUser(): void {
    console.log(this.user);

  }
}
