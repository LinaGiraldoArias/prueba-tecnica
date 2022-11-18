import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private url ='https://rickandmortyapi.com/api/character'
  constructor(private http: HttpClient,) { }
  personajes(){
    return this.http.get(`${this.url}`)
  }
}
