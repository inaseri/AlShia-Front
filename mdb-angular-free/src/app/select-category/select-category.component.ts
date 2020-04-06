import { Component, OnInit } from '@angular/core';
import { Apiservice } from "../Service/apiservice";
import { Categories } from "../Models/categories";

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  public term_id: number;
  constructor() { }

  ngOnInit(): void {
    console.log('term id in the seelasdf : ', this.term_id);
  }

}
