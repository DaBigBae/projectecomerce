import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor(private http: HttpClient) { }
  // login(data: any): Observable<any> {
  //   return this.http.post<any>(apiUrl + 'login', data,httpOptions)
  //     .pipe(
  //       tap(_ => this.isLoggedIn = true),
  //       catchError(this.handleError('login', []))
  //     );
  // }
  
  logout(): Observable<any> {
    return this.http.get<any>(apiUrl + 'signout')
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  }
  
  register(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'register', data,httpOptions)
      .pipe(
        tap(_ => console.log('login')),
        catchError(this.handleError('login', []))
      );
  }
  login(email: string, password: string): Observable<any> {
      return this.http.post<any>(apiUrl + `/user/login`, { email: email, password: password },httpOptions)
      .pipe(
      catchError(this.handleError));
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
}
