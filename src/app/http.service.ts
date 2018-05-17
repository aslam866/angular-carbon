
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class HttpService {
  
  constructor(private http: HttpClient) {
    console.log(this.http);
    console.log(new HttpHeaders());
   }
   search(parmas){
       const url=`https://itunes.apple.com/search?term=${parmas.artist}&limit=${parmas.limit}`;
       return this.http.get(url);
    //  promise.subscribe(function(response){
    //    console.log(response);
    //  });
   }
  //  get():Observable{
  //     return ;
  //  }
}
