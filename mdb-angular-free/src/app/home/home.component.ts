import { Component, OnInit } from '@angular/core';
import { Categories } from "../Models/categories";
import { Apiservice } from "../Service/apiservice";
import { Router } from "@angular/router";


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
  ) {}

  ngOnInit(): void {
    this.apiService.parent_categories().subscribe(
      response => {
        this.data = response;
      },
      error => console.log(error));
  }

  gotToCategory(term_id) {
    this.apiService.term_id = term_id.term_id;
    this.router.navigate(['selected_category']);
  }

}
