import { UserService } from './../user-list/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  localGlobals = JSON.parse(localStorage.getItem('globe'));
  Arr = Array;
  num: number;

  constructor() {

    this.localGlobals = JSON.parse(localStorage.getItem('globe'));
    this.num = this.localGlobals.Gpax;
    console.log(this.localGlobals.Gpax);
  }
}
