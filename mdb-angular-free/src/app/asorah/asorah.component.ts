import { Component, OnInit } from '@angular/core';
import {Categories} from "../Models/categories";
import {Posts} from "../Models/posts";
import {Apiservice} from "../Service/apiservice";
import {Router} from "@angular/router";
import { Response } from "selenium-webdriver/http";

@Component({
  selector: 'app-asorah',
  templateUrl: './asorah.component.html',
  styleUrls: ['./asorah.component.scss']
})
export class AsorahComponent implements OnInit {

  categories_data: Categories;
  post_data = Posts;

  constructor(
    public apiService: Apiservice,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.get_child_categories();
    this.get_post()
  }

  get_child_categories() {
    this.apiService.children_categories(this.apiService.term_id).subscribe(
      response => {
        this.categories_data = response;
      },
      error => {
        console.log(error)
      }
    );
  }

  get_post() {
    this.apiService.children_categories(this.apiService.term_id).subscribe(
      response => {
        for (const key in response) {
          console.log('in for');
          if (response.hasOwnProperty(key)) {
            const term_id = this.categories_data[key].term_taxonomy_id;
            this.apiService.get_post_in_list_categories(term_id).subscribe(
              response => {
                console.log('response is::: ', response);
                let post_custom = new Posts();
                post_custom.ID = response.ID;
                post_custom.post_title = response.post_title;
                post_custom.guid = response.guid;
                this.post_data.apply(post_custom);
              },
            );
          }
        }
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
