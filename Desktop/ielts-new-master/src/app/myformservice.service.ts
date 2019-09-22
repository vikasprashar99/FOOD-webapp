import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyformserviceService {
  url:string = "http://localhost:3000/myname";
  constructor(private http: HttpClient) { }

  receivevalues(name:string,address:string,dob:string){
    console.log("The values are as follows " + name + " " + address + " " + dob);

  }
  

  getDataFromServer(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
