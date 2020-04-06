import { Component, OnInit } from '@angular/core';
import { Categories } from "../Models/categories";
import { Apiservice } from "../Service/apiservice";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Categories;
  constructor(
    public apiService: Apiservice
  ) { }

  ngOnInit(): void {
    this.apiService.parent_categories().subscribe(
      response => {
        this.data = response;
      },
      error => console.log(error));
  }

}
