import { Injectable } from '@angular/core';
import { User } from '../_models';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  //Define API
  // apiURL = 'http://137.135.125.91:3000'
  httpOption;
  apiURL = 'http://localhost:3000'
  constructor(
    private http: HttpClient

  ) { }

  //HTTP Option
  httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  //Admin - get user
  getUser(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/user').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //Get user by ID
  getUserByID(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/user/:id').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiURL + `/user/login`, { email: email, password: password }, this.httpOpt)
      .pipe(
        catchError(this.handleError));
  }

  logout(Authorization: string) {
    // remove user from local storage to log user out
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': Authorization
      })
    }
    return this.http.post<any>(this.apiURL + `/user/logout`, this.httpOption)
      .pipe(
        tap((data: any) => {

        }),
        catchError(error => {
          return this.handleError(error)
        }));
  }
  register(user) {
    return this.http.post(this.apiURL + `/user/signup`, user, this.httpOpt)
      .pipe(
        tap((data: any) => {
          console.log(data);

        }),
        catchError(error => {
          return this.handleError(error)
        }));
  }
  changepassword(Authorization: string, password1: string, password2: string, ) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': Authorization
      })
    }
    return this.http.patch(this.apiURL + `/user/changepassword`, {Authorization: Authorization, password1: password1, password2: password2 }, this.httpOption)
      .pipe(
        catchError(error => {
          return this.handleError(error)
        }));
  }

  changeinfouser(Authorization: string, name: string, mail: string) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': Authorization
      })
    }
    return this.http.patch(this.apiURL + `/user/changeprofile`, {Authorization: Authorization, name: name, email: mail }, this.httpOption)
      .pipe(
        catchError(error => {
          return this.handleError(error)
        }));
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getProducts() {
    return this.http.get(this.apiURL + '/product', this.httpOpt).pipe(
      map(this.extractData), catchError(this.handleError));
  }
  getProduct(id): Observable<any> {
    return this.http.get(this.apiURL + '/product/' + id, this.httpOpt).pipe(
      map(this.extractData), catchError(this.handleError));
  }
  addProduct(product): Observable<any> {
    console.log(product);
    return this.http.post<any>(this.apiURL + 'products', JSON.stringify(product), this.httpOpt).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError));
  }
  updateProduct(id, product): Observable<any> {
    return this.http.put(this.apiURL + 'products/' + id, JSON.stringify(product), this.httpOpt).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError));
  }
  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(this.apiURL + 'products/' + id, this.httpOpt).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
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
  };

}
  //Error handling
//   handleError(err){
//     let errorMessage = '';
//     if (err.error instanceof ErrorEvent){
//       //Client side error
//       errorMessage = err.error.message;
//     } else {
//       //server side error
//       errorMessage =  `Error code: ${err.status}\nMessage:${err.message}`;
//     }
//     window.alert(errorMessage);
//     return throwError(errorMessage);
//   }
// }
