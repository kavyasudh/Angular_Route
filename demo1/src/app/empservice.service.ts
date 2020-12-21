import { Injectable } from '@angular/core';

import { Employee } from './employee';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  private _url = 'http://localhost:8084/empapp/api/employee';
  constructor(private http: HttpClient) { }
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url).pipe(catchError(this.errorHandler));
   }

   errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error!');
  }

//  public getEmployees(){
//     return [
//        {"id": 1, "name": "Rajev", "age": 40},
//        {"id": 2, "name": "Ekta", "age": 38},
//        {"id": 3, "name": "Keshav", "age": 26},
//        {"id": 4, "name": "Gunika", "age": 28},
//        {"id": 5, "name": "Vikas", "age": 25}    
//    ];
//    }
}
