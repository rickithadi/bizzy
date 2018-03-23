import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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
  screenWidth: number;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.localGlobals = JSON.parse(localStorage.getItem('globe'));
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  sidething() {
    this.localGlobals = JSON.parse(localStorage.getItem('globe'));
    console.log('gpax', this.localGlobals.Gpax);
  }
}
