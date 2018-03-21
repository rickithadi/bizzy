import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  template: `
  <br>
  <div class="main-div">
  shots
  <input matInput type="number" [(ngModel)]="globe.Gshots" value={{globe.Gshots}}/>
 </div>
 <br>

  <div class="main-div">
 volume
   <input matInput type="number" [(ngModel)]="globe.Gvolume" value={{globe.Gvolume}}/>
</div>
<br>
<div class="center">
  modifier
  </div>


  <div class="center">

  <mat-slider min="1" max="5" step="0.5"[(ngModel)]="globe.Gmodifier" value={{globe.Gmodifier}}></mat-slider>{{globe.Gmodifier}}


        </div>


        <div class="center">
 Gpax
   </div>

        <div class="center">
        <mat-slider min="1" max="5" step="1"[(ngModel)]="globe.Gpax" value={{globe.Gpax}}></mat-slider>{{globe.Gpax}}
        </div>

        <div class="center">
        <button mat-button class="btn btn-primary" (click)="submit()">Submit</button>
          <br>


</div>
`,
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  globe = {
    Gshots: 0,
    Gvolume: 0,
    Gmodifier: 1,
    Gpax: 4
  };

  constructor() {
   localStorage.setItem('globe', JSON.stringify(this.globe));
  }

  ngOnInit() {}

  private submit() {
    localStorage.setItem('globe', JSON.stringify(this.globe));
  }
}
