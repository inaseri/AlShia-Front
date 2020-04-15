import { Component, OnInit } from '@angular/core';
import { Categories } from "../Models/categories";
import { Posts } from "../Models/posts";
import { Apiservice } from "../Service/apiservice";
import { Router } from "@angular/router";


@Component({
  selector: 'app-selectcategory',
  templateUrl: './selectcategory.component.html',
  styleUrls: ['./selectcategory.component.scss']
})

export class SelectcategoryComponent implements OnInit {

  data: Categories;
  post_data: Posts;

  constructor(
    public apiService: Apiservice,
    public router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.apiService.term_id);
    this.get_child_categories();
  }

  get_child_categories() {
    this.apiService.children_categories(this.apiService.term_id).subscribe(
      response => {
        this.data = response
      },
      error => {
        console.log(error)
      }
    );
  }

  gotToCategory(term_id) {
    this.apiService.term_id = term_id;
    this.router.navigate(['selected_category']);
  }

}
