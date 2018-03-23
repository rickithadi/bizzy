import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global',
  template: `
  <br>
  <div class="main-div">
  shots:
  <input matInput type="number" [(ngModel)]="globe.Gshots" (change)="submit()" value={{globe.Gshots}}/>
 </div>
 <br>

  <div class="main-div">
 volume:
   <input matInput type="number" [(ngModel)]="globe.Gvolume" (change)="submit()" value={{globe.Gvolume}}/>
</div>
<br>
<div class="center">
  modifier
  </div>


  <div class="center">

  <mat-slider min="1" max="5" step="0.5"[(ngModel)]="globe.Gmodifier" (change)="submit()"value={{globe.Gmodifier}} ></mat-slider>{{globe.Gmodifier}}


        </div>


        <div class="center">
 Gpax
   </div>

        <div class="center">
        <mat-slider min="1" max="5" step="1"[(ngModel)]="globe.Gpax" (change)="submit()"value={{globe.Gpax}} ></mat-slider>{{globe.Gpax}}
        </div>


<div class="center">
<app-players [count]="globe.Gpax"> </app-players>

</div>

`,
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  initialCount = 10;
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
    console.log('submitted globals');
  }
}
