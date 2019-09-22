import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private baseurl: string ="https://x0nn0tpbnh.execute-api.ap-south-1.amazonaws.com/dev/";

  private findEnterpriseID = this.baseurl +"getEnterPriseIDByEmail"

  constructor(private http: HttpClient) { }

  findEnterpriseIDUsingEmail(dataBody): Observable<any> {
    console.log(dataBody);
    return this.http.post<any>(this.findEnterpriseID, dataBody);
  }
}
