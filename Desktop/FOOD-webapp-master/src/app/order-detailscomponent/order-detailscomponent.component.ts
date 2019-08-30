import { Component, OnInit } from "@angular/core";
import { OrderService } from "../Services/order.service";

@Component({
  selector: "app-order-detailscomponent",
  templateUrl: "./order-detailscomponent.component.html",
  styleUrls: ["./order-detailscomponent.component.css"]
})
export class OrderDetailscomponentComponent implements OnInit {
  orderobj;

  constructor(private order: OrderService) {}

  ngOnInit() {
    this.orderobj = this.order.orderDetailsOb;
    console.log(this.orderobj);
  }
}
