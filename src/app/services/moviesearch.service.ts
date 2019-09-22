import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Movieinfo} from '../model/movieinfo';

@Injectable({
  providedIn: 'root'
})
export class MoviesearchService {

  baseURL: string = 'http://www.omdbapi.com/?apikey=abb382c';
   
  constructor(private http: HttpClient )
  {

  }
 
 Search(movietitle: string)
 {
    console.log("SEARCH CALLED in Service");
    return this.http.get<any>(this.baseURL+"&s="+movietitle);
 }

}