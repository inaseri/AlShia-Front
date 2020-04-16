import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { NabiComponent } from './nabi/nabi.component';
import { MazhabComponent } from './mazhab/mazhab.component';
import { AsorahComponent } from './asorah/asorah.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nabi-ahleh', component: NabiComponent },
  { path: 'mazhab-shiei', component: MazhabComponent },
  { path: 'osrah-shie', component: AsorahComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    NabiComponent,
    MazhabComponent,
    AsorahComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
