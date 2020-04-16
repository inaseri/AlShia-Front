import { Component, OnInit } from '@angular/core';
import { Categories } from "../Models/categories";
import { Posts } from "../Models/posts";
import { Apiservice } from "../Service/apiservice";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nabi',
  templateUrl: './nabi.component.html',
  styleUrls: ['./nabi.component.scss']
})
export class NabiComponent implements OnInit {

  categories_data: Categories;
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
        this.categories_data = response
      },
      error => {
        console.log(error)
      }
    );
  }

  gotToCategory(term_id) {
    this.apiService.term_id = term_id;
    if (term_id === 1162) {
      this.router.navigate(['nabi-ahleh']);
    } else if (term_id === 882) {
      this.router.navigate(['mazhab-shiei'])
    } else {
      this.router.navigate(['osrah-shie'])
    }
  }


}
