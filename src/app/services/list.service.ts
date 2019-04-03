import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const URL_API = `http://localhost:3000/skins`;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
}

@Injectable({
  providedIn: 'root'
})


export class ListService {

  constructor(private http: HttpClient) { }

  getVGA():Observable<any>{
    return this.http.get(URL_API,httpOptions);
  }

  getVGADetails(id:string):Observable<any>{
    const url = `${URL_API}/${id}`;
    return this.http.get<any>(URL_API,httpOptions);
  }
  


  private handleError<T>(Operator = `operation`, result?: T){
      return (error:any):Observable<T> => {
        console.error(error); // log de error
        return of(result as T);
      }
    }}