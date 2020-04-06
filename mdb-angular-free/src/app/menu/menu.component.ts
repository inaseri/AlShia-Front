import { Component, OnInit } from '@angular/core';
import { Apiservice } from "../Service/apiservice";
import { Categories } from "../Models/categories";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
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
