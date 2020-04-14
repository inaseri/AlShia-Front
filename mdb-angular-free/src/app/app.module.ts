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
import { SelectcategoryComponent } from './selectcategory/selectcategory.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'selected_category', component: SelectcategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    SelectcategoryComponent,
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
