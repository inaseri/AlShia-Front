import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient} from "@angular/common/http";
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Models Imports
import { Categories } from "../Models/categories";
import { Posts } from "../Models/posts";

@Injectable({
  providedIn: 'root'
})

export class Apiservice {

  base_path = 'https://api.alshia.inaseri.ir/api/';
  term_id: number;

  constructor(private http: HttpClient) { }

  // Http Options
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Get the list of parent categories
  parent_categories(): Observable<Categories> {
    return this.http
    .get<Categories>(this.base_path + 'categories/', this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    );
  }

  children_categories(term_id): Observable<Categories> {
    return this.http
      .get<Categories>(this.base_path + 'child_categories/' + term_id + '/', this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  get_post_in_child_categories(term_id): Observable<Posts> {
      return this.http
      .get<Posts>(this.base_path + 'posts/' + term_id + '/', this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }
}
