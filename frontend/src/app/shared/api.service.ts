import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Order, Product } from '../shared/datastucture';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  //Define API
  apiURL = 'http://137.135.125.91:3000'
  constructor(
    private http: HttpClient
  ) { }

  //HTTP Option
  httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getUser(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //Error handling
  handleError(err){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent){
      //Client side error
      errorMessage = err.error.message;
    } else {
      //server side error
      errorMessage =  `Error code: ${err.status}\nMessage:${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
