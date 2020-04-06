import { Component, OnInit } from '@angular/core';
import { Categories } from "../Models/categories";
import { Apiservice } from "../Service/apiservice";
import { Router } from "@angular/router";
import { SelectCategoryComponent } from "../select-category/select-category.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Categories;
  term_id: number;

  constructor(
    public apiService: Apiservice,
    public router: Router,
    public selectedCategory: SelectCategoryComponent
  ) {}

  ngOnInit(): void {
    this.apiService.parent_categories().subscribe(
      response => {
        this.data = response;
      },
      error => console.log(error));
  }

  gotToCategory(term_id) {
    this.selectedCategory.term_id = term_id.term_id;
    this.router.navigate(['selected_category']);
  }

}