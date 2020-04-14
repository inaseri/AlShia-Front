import { Component, OnInit } from '@angular/core';
import { Categories } from "../Models/categories";
import { Posts } from "../Models/posts";
import { Apiservice } from "../Service/apiservice";


@Component({
  selector: 'app-selectcategory',
  templateUrl: './selectcategory.component.html',
  styleUrls: ['./selectcategory.component.scss']
})

export class SelectcategoryComponent implements OnInit {

  data: Categories;
  post_data: Posts;

  constructor(
    public apiService: Apiservice
  ) {}

  ngOnInit(): void {
    console.log(this.apiService.term_id);
    this.get_child_categories();
    this.get_posts()
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

  get_posts() {
    this.apiService.get_post_in_child_categories(this.apiService.term_id).subscribe(
      response => {
        // this.post_data = response;
        // console.log(response);
      },
      error => {
        console.log(error)
      }
    );
  }

}
