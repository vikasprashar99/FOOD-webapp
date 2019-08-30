import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { placedOrder } from "../Classes/placedOrder";
import { delieveredOrder } from "../Classes/Delivered";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  myvar: string;
  orderDetailsOb;

  getOrderDataAPI =
    "https://k1ety8rvl1.execute-api.ap-south-1.amazonaws.com/dev/api/order";
  postorderDetailsAPI =
    "https://k1ety8rvl1.execute-api.ap-south-1.amazonaws.com/dev/api/order/processComplete/";
  postPaymentAPI =
    "https://k1ety8rvl1.execute-api.ap-south-1.amazonaws.com/dev/api/order/delivered/";

  constructor(private http: HttpClient) {}
  getOrderData(): Observable<placedOrder> {
    return this.http.get<placedOrder>(this.getOrderDataAPI);
  }
  postOrderData(order: any): Observable<placedOrder> {
    const URL = this.postorderDetailsAPI + order;
    return this.http.post<placedOrder>(URL, order);
  }
  postPaymentData(order: any, Payment: any): Observable<delieveredOrder> {
    const URL = this.postPaymentAPI + order;
    return this.http.post<delieveredOrder>(URL, Payment);
  }
}
