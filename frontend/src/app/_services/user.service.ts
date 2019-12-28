import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../_models';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
const endpoint = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
    providedIn: 'root'
  })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(endpoint + `/users`);
    }

    getById(id: number) {
        return this.http.get(endpoint + `/users/` + id);
    }

    register(user) {
        return this.http.post(endpoint +`/user/signup`, user, httpOptions)
        .pipe(
            tap((data: any) => {
                console.log(data);
                
            }),
            catchError(error =>{
                return this.handleError(error)
            }));
    }

    update(user: User) {
        return this.http.put(endpoint + `/users/` + user.id, user,httpOptions);
    }

    delete(id: number) {
        return this.http.delete(endpoint + `/users/` + id,httpOptions);
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
        //   console.error(
        //     `Backend returned code ${error.status}, ` +
        //     `body was: ${error}`);
        console.log(error.error);
        
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}