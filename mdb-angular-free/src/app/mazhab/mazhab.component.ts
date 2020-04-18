import { Component, OnInit } from '@angular/core';
import {Categories} from "../Models/categories";
import {Posts} from "../Models/posts";
import {Apiservice} from "../Service/apiservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mazhab',
  templateUrl: './mazhab.component.html',
  styleUrls: ['./mazhab.component.scss']
})
export class MazhabComponent implements OnInit {

  categories_data: Categories;
  post_data = [];

  constructor(
    public apiService: Apiservice,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.get_child_categories();
    this.get_post()
    console.log('post data:', this.post_data);
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
                this.post_data.push(response);
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
