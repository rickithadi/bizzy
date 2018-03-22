import { PlayerService } from './players/player.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // <-- #1 import module
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { GlobalComponent } from '../global/global.component';

// import { UserService } from '../user-list/user.service';

import { UserListComponent } from '../user-list/user-list.component';
// import { UserDetailComponent } from '../user-detail/user-detail.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    //UserListComponent,
    //UserDetailComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    MatSliderModule,
    MatRadioModule,
    MatExpansionModule,
    FormsModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [ PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
